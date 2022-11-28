import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeIndexPathParams extends SpeakeasyBase {
    indexName: string;
}
export declare class DescribeIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeIndexRequest extends SpeakeasyBase {
    pathParams: DescribeIndexPathParams;
    headers: DescribeIndexHeaders;
}
export declare class DescribeIndexResponse extends SpeakeasyBase {
    contentType: string;
    describeIndexResponse?: shared.DescribeIndexResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
