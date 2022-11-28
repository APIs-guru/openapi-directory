import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssessmentReportEvidenceError
/** 
 *  An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class AssessmentReportEvidenceError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceId" })
  evidenceId?: string;
}
