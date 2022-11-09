import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartIcd10CmInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StartIcd10CmInferenceJob = "ComprehendMedical_20181030.StartICD10CMInferenceJob"
}
export declare class StartIcd10CmInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartIcd10CmInferenceJobXAmzTargetEnum;
}
export declare class StartIcd10CmInferenceJobRequest extends SpeakeasyBase {
    headers: StartIcd10CmInferenceJobHeaders;
    request: shared.StartIcd10CmInferenceJobRequest;
}
export declare class StartIcd10CmInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    startIcd10CmInferenceJobResponse?: shared.StartIcd10CmInferenceJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
