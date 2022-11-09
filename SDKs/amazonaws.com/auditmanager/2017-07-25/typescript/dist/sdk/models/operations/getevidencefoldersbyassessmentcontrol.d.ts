import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEvidenceFoldersByAssessmentControlPathParams extends SpeakeasyBase {
    assessmentId: string;
    controlId: string;
    controlSetId: string;
}
export declare class GetEvidenceFoldersByAssessmentControlQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetEvidenceFoldersByAssessmentControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEvidenceFoldersByAssessmentControlRequest extends SpeakeasyBase {
    pathParams: GetEvidenceFoldersByAssessmentControlPathParams;
    queryParams: GetEvidenceFoldersByAssessmentControlQueryParams;
    headers: GetEvidenceFoldersByAssessmentControlHeaders;
}
export declare class GetEvidenceFoldersByAssessmentControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEvidenceFoldersByAssessmentControlResponse?: shared.GetEvidenceFoldersByAssessmentControlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
