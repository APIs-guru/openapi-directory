import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEvidenceFoldersByAssessmentPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class GetEvidenceFoldersByAssessmentQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetEvidenceFoldersByAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEvidenceFoldersByAssessmentRequest extends SpeakeasyBase {
    pathParams: GetEvidenceFoldersByAssessmentPathParams;
    queryParams: GetEvidenceFoldersByAssessmentQueryParams;
    headers: GetEvidenceFoldersByAssessmentHeaders;
}
export declare class GetEvidenceFoldersByAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEvidenceFoldersByAssessmentResponse?: shared.GetEvidenceFoldersByAssessmentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
