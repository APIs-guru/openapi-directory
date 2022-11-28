import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFleetMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class DescribeFleetMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFleetMetricRequest extends SpeakeasyBase {
    pathParams: DescribeFleetMetricPathParams;
    headers: DescribeFleetMetricHeaders;
}
export declare class DescribeFleetMetricResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetMetricResponse?: shared.DescribeFleetMetricResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
