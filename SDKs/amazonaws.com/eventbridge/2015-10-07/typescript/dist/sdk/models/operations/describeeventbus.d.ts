import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEventBusXAmzTargetEnum {
    AwsEventsDescribeEventBus = "AWSEvents.DescribeEventBus"
}
export declare class DescribeEventBusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventBusXAmzTargetEnum;
}
export declare class DescribeEventBusRequest extends SpeakeasyBase {
    headers: DescribeEventBusHeaders;
    request: shared.DescribeEventBusRequest;
}
export declare class DescribeEventBusResponse extends SpeakeasyBase {
    contentType: string;
    describeEventBusResponse?: shared.DescribeEventBusResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
