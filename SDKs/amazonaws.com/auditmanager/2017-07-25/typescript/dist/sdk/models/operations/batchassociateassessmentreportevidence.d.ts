import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchAssociateAssessmentReportEvidencePathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class BatchAssociateAssessmentReportEvidenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchAssociateAssessmentReportEvidenceRequestBody extends SpeakeasyBase {
    evidenceFolderId: string;
    evidenceIds: string[];
}
export declare class BatchAssociateAssessmentReportEvidenceRequest extends SpeakeasyBase {
    pathParams: BatchAssociateAssessmentReportEvidencePathParams;
    headers: BatchAssociateAssessmentReportEvidenceHeaders;
    request: BatchAssociateAssessmentReportEvidenceRequestBody;
}
export declare class BatchAssociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchAssociateAssessmentReportEvidenceResponse?: shared.BatchAssociateAssessmentReportEvidenceResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
