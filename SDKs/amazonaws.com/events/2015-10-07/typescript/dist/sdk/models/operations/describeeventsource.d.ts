import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEventSourceXAmzTargetEnum {
    AwsEventsDescribeEventSource = "AWSEvents.DescribeEventSource"
}
export declare class DescribeEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventSourceXAmzTargetEnum;
}
export declare class DescribeEventSourceRequest extends SpeakeasyBase {
    headers: DescribeEventSourceHeaders;
    request: shared.DescribeEventSourceRequest;
}
export declare class DescribeEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    describeEventSourceResponse?: shared.DescribeEventSourceResponse;
    internalException?: any;
    operationDisabledException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
