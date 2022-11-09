import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ManualEvidence } from "./manualevidence";
/**
 *  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.
**/
export declare class BatchImportEvidenceToAssessmentControlError extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    manualEvidence?: ManualEvidence;
}
