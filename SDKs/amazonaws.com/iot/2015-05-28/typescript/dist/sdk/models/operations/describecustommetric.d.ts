import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCustomMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class DescribeCustomMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCustomMetricRequest extends SpeakeasyBase {
    pathParams: DescribeCustomMetricPathParams;
    headers: DescribeCustomMetricHeaders;
}
export declare class DescribeCustomMetricResponse extends SpeakeasyBase {
    contentType: string;
    describeCustomMetricResponse?: shared.DescribeCustomMetricResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
