import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeGatewayRoutePathParams extends SpeakeasyBase {
    gatewayRouteName: string;
    meshName: string;
    virtualGatewayName: string;
}
export declare class DescribeGatewayRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DescribeGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeGatewayRouteRequest extends SpeakeasyBase {
    pathParams: DescribeGatewayRoutePathParams;
    queryParams: DescribeGatewayRouteQueryParams;
    headers: DescribeGatewayRouteHeaders;
}
export declare class DescribeGatewayRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeGatewayRouteOutput?: shared.DescribeGatewayRouteOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
