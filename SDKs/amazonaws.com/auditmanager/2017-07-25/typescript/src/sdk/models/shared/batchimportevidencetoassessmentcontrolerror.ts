import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManualEvidence } from "./manualevidence";


// BatchImportEvidenceToAssessmentControlError
/** 
 *  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class BatchImportEvidenceToAssessmentControlError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=manualEvidence" })
  manualEvidence?: ManualEvidence;
}
