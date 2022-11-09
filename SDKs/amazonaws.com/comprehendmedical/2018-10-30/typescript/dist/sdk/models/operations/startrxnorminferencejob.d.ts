import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StartRxNormInferenceJob = "ComprehendMedical_20181030.StartRxNormInferenceJob"
}
export declare class StartRxNormInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRxNormInferenceJobXAmzTargetEnum;
}
export declare class StartRxNormInferenceJobRequest extends SpeakeasyBase {
    headers: StartRxNormInferenceJobHeaders;
    request: shared.StartRxNormInferenceJobRequest;
}
export declare class StartRxNormInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    startRxNormInferenceJobResponse?: shared.StartRxNormInferenceJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
