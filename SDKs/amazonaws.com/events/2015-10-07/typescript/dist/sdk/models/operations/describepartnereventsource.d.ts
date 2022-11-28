import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePartnerEventSourceXAmzTargetEnum {
    AwsEventsDescribePartnerEventSource = "AWSEvents.DescribePartnerEventSource"
}
export declare class DescribePartnerEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePartnerEventSourceXAmzTargetEnum;
}
export declare class DescribePartnerEventSourceRequest extends SpeakeasyBase {
    headers: DescribePartnerEventSourceHeaders;
    request: shared.DescribePartnerEventSourceRequest;
}
export declare class DescribePartnerEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    describePartnerEventSourceResponse?: shared.DescribePartnerEventSourceResponse;
    internalException?: any;
    operationDisabledException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
