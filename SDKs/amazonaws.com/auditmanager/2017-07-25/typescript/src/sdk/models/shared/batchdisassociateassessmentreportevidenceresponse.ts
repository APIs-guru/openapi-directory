import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentReportEvidenceError } from "./assessmentreportevidenceerror";


export class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.AssessmentReportEvidenceError })
  errors?: AssessmentReportEvidenceError[];

  @Metadata({ data: "json, name=evidenceIds" })
  evidenceIds?: string[];
}
