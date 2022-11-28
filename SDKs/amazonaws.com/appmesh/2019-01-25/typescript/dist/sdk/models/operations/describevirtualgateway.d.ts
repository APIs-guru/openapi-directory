import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVirtualGatewayPathParams extends SpeakeasyBase {
    meshName: string;
    virtualGatewayName: string;
}
export declare class DescribeVirtualGatewayQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DescribeVirtualGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVirtualGatewayRequest extends SpeakeasyBase {
    pathParams: DescribeVirtualGatewayPathParams;
    queryParams: DescribeVirtualGatewayQueryParams;
    headers: DescribeVirtualGatewayHeaders;
}
export declare class DescribeVirtualGatewayResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeVirtualGatewayOutput?: shared.DescribeVirtualGatewayOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
