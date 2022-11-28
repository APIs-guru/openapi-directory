import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PauseServiceXAmzTargetEnum {
    AppRunnerPauseService = "AppRunner.PauseService"
}
export declare class PauseServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PauseServiceXAmzTargetEnum;
}
export declare class PauseServiceRequest extends SpeakeasyBase {
    headers: PauseServiceHeaders;
    request: shared.PauseServiceRequest;
}
export declare class PauseServiceResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    pauseServiceResponse?: shared.PauseServiceResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
