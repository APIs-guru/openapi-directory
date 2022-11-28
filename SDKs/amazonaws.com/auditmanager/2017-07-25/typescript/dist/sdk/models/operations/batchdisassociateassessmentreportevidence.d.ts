import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDisassociateAssessmentReportEvidencePathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class BatchDisassociateAssessmentReportEvidenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisassociateAssessmentReportEvidenceRequestBody extends SpeakeasyBase {
    evidenceFolderId: string;
    evidenceIds: string[];
}
export declare class BatchDisassociateAssessmentReportEvidenceRequest extends SpeakeasyBase {
    pathParams: BatchDisassociateAssessmentReportEvidencePathParams;
    headers: BatchDisassociateAssessmentReportEvidenceHeaders;
    request: BatchDisassociateAssessmentReportEvidenceRequestBody;
}
export declare class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchDisassociateAssessmentReportEvidenceResponse?: shared.BatchDisassociateAssessmentReportEvidenceResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
