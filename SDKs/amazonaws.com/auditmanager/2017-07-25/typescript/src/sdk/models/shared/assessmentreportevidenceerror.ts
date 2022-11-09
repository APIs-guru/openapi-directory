import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssessmentReportEvidenceError
/** 
 *  An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
export class AssessmentReportEvidenceError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=evidenceId" })
  evidenceId?: string;
}
