import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopIcd10CmInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopIcd10CmInferenceJob = "ComprehendMedical_20181030.StopICD10CMInferenceJob"
}
export declare class StopIcd10CmInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopIcd10CmInferenceJobXAmzTargetEnum;
}
export declare class StopIcd10CmInferenceJobRequest extends SpeakeasyBase {
    headers: StopIcd10CmInferenceJobHeaders;
    request: shared.StopIcd10CmInferenceJobRequest;
}
export declare class StopIcd10CmInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopIcd10CmInferenceJobResponse?: shared.StopIcd10CmInferenceJobResponse;
}
