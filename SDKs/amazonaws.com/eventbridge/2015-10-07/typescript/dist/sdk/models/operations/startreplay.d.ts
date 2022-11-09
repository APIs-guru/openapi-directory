import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartReplayXAmzTargetEnum {
    AwsEventsStartReplay = "AWSEvents.StartReplay"
}
export declare class StartReplayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplayXAmzTargetEnum;
}
export declare class StartReplayRequest extends SpeakeasyBase {
    headers: StartReplayHeaders;
    request: shared.StartReplayRequest;
}
export declare class StartReplayResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidEventPatternException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    startReplayResponse?: shared.StartReplayResponse;
    statusCode: number;
}
