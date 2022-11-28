import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEndpointQueryParams extends SpeakeasyBase {
    endpointType?: string;
}
export declare class DescribeEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeEndpointRequest extends SpeakeasyBase {
    queryParams: DescribeEndpointQueryParams;
    headers: DescribeEndpointHeaders;
}
export declare class DescribeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointResponse?: shared.DescribeEndpointResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
