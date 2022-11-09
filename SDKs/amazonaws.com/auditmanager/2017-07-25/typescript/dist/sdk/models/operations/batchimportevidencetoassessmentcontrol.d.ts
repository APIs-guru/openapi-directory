import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchImportEvidenceToAssessmentControlPathParams extends SpeakeasyBase {
    assessmentId: string;
    controlId: string;
    controlSetId: string;
}
export declare class BatchImportEvidenceToAssessmentControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchImportEvidenceToAssessmentControlRequestBody extends SpeakeasyBase {
    manualEvidence: shared.ManualEvidence[];
}
export declare class BatchImportEvidenceToAssessmentControlRequest extends SpeakeasyBase {
    pathParams: BatchImportEvidenceToAssessmentControlPathParams;
    headers: BatchImportEvidenceToAssessmentControlHeaders;
    request: BatchImportEvidenceToAssessmentControlRequestBody;
}
export declare class BatchImportEvidenceToAssessmentControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchImportEvidenceToAssessmentControlResponse?: shared.BatchImportEvidenceToAssessmentControlResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
