import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeReplayXAmzTargetEnum {
    AwsEventsDescribeReplay = "AWSEvents.DescribeReplay"
}
export declare class DescribeReplayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplayXAmzTargetEnum;
}
export declare class DescribeReplayRequest extends SpeakeasyBase {
    headers: DescribeReplayHeaders;
    request: shared.DescribeReplayRequest;
}
export declare class DescribeReplayResponse extends SpeakeasyBase {
    contentType: string;
    describeReplayResponse?: shared.DescribeReplayResponse;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
