import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportEvidenceError } from "./assessmentreportevidenceerror";
export declare class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
    errors?: AssessmentReportEvidenceError[];
    evidenceIds?: string[];
}
