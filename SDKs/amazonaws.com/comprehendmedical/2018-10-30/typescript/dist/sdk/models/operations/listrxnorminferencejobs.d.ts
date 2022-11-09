import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListRxNormInferenceJobsXAmzTargetEnum {
    ComprehendMedical20181030ListRxNormInferenceJobs = "ComprehendMedical_20181030.ListRxNormInferenceJobs"
}
export declare class ListRxNormInferenceJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRxNormInferenceJobsXAmzTargetEnum;
}
export declare class ListRxNormInferenceJobsRequest extends SpeakeasyBase {
    headers: ListRxNormInferenceJobsHeaders;
    request: shared.ListRxNormInferenceJobsRequest;
}
export declare class ListRxNormInferenceJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listRxNormInferenceJobsResponse?: shared.ListRxNormInferenceJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
