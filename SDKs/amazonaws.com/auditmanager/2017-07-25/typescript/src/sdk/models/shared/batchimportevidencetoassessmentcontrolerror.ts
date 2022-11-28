import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManualEvidence } from "./manualevidence";



// BatchImportEvidenceToAssessmentControlError
/** 
 *  An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class BatchImportEvidenceToAssessmentControlError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=manualEvidence" })
  manualEvidence?: ManualEvidence;
}
