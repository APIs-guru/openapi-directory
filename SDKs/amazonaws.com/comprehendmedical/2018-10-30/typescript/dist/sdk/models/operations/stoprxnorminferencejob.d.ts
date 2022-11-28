import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopRxNormInferenceJob = "ComprehendMedical_20181030.StopRxNormInferenceJob"
}
export declare class StopRxNormInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRxNormInferenceJobXAmzTargetEnum;
}
export declare class StopRxNormInferenceJobRequest extends SpeakeasyBase {
    headers: StopRxNormInferenceJobHeaders;
    request: shared.StopRxNormInferenceJobRequest;
}
export declare class StopRxNormInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopRxNormInferenceJobResponse?: shared.StopRxNormInferenceJobResponse;
}
