import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportEvidenceError } from "./assessmentreportevidenceerror";



export class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: AssessmentReportEvidenceError })
  errors?: AssessmentReportEvidenceError[];

  @SpeakeasyMetadata({ data: "json, name=evidenceIds" })
  evidenceIds?: string[];
}
