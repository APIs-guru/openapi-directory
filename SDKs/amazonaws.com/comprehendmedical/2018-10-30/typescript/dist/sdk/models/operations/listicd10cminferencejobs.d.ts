import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListIcd10CmInferenceJobsXAmzTargetEnum {
    ComprehendMedical20181030ListIcd10CmInferenceJobs = "ComprehendMedical_20181030.ListICD10CMInferenceJobs"
}
export declare class ListIcd10CmInferenceJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIcd10CmInferenceJobsXAmzTargetEnum;
}
export declare class ListIcd10CmInferenceJobsRequest extends SpeakeasyBase {
    headers: ListIcd10CmInferenceJobsHeaders;
    request: shared.ListIcd10CmInferenceJobsRequest;
}
export declare class ListIcd10CmInferenceJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listIcd10CmInferenceJobsResponse?: shared.ListIcd10CmInferenceJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
