import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeApiDestinationXAmzTargetEnum {
    AwsEventsDescribeApiDestination = "AWSEvents.DescribeApiDestination"
}
export declare class DescribeApiDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApiDestinationXAmzTargetEnum;
}
export declare class DescribeApiDestinationRequest extends SpeakeasyBase {
    headers: DescribeApiDestinationHeaders;
    request: shared.DescribeApiDestinationRequest;
}
export declare class DescribeApiDestinationResponse extends SpeakeasyBase {
    contentType: string;
    describeApiDestinationResponse?: shared.DescribeApiDestinationResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
