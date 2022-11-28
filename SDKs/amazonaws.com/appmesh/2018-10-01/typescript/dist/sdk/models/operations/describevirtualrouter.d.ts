import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVirtualRouterPathParams extends SpeakeasyBase {
    meshName: string;
    virtualRouterName: string;
}
export declare class DescribeVirtualRouterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVirtualRouterRequest extends SpeakeasyBase {
    pathParams: DescribeVirtualRouterPathParams;
    headers: DescribeVirtualRouterHeaders;
}
export declare class DescribeVirtualRouterResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeVirtualRouterOutput?: shared.DescribeVirtualRouterOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
