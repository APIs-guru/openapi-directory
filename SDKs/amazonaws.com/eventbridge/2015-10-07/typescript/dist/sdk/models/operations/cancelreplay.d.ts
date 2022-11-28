import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelReplayXAmzTargetEnum {
    AwsEventsCancelReplay = "AWSEvents.CancelReplay"
}
export declare class CancelReplayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelReplayXAmzTargetEnum;
}
export declare class CancelReplayRequest extends SpeakeasyBase {
    headers: CancelReplayHeaders;
    request: shared.CancelReplayRequest;
}
export declare class CancelReplayResponse extends SpeakeasyBase {
    cancelReplayResponse?: shared.CancelReplayResponse;
    concurrentModificationException?: any;
    contentType: string;
    illegalStatusException?: any;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
