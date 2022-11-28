import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVirtualServicePathParams extends SpeakeasyBase {
    meshName: string;
    virtualServiceName: string;
}
export declare class DescribeVirtualServiceQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DescribeVirtualServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVirtualServiceRequest extends SpeakeasyBase {
    pathParams: DescribeVirtualServicePathParams;
    queryParams: DescribeVirtualServiceQueryParams;
    headers: DescribeVirtualServiceHeaders;
}
export declare class DescribeVirtualServiceResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeVirtualServiceOutput?: shared.DescribeVirtualServiceOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
