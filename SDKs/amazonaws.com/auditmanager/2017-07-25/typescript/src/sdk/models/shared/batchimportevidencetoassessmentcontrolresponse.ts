import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchImportEvidenceToAssessmentControlError } from "./batchimportevidencetoassessmentcontrolerror";



export class BatchImportEvidenceToAssessmentControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchImportEvidenceToAssessmentControlError })
  errors?: BatchImportEvidenceToAssessmentControlError[];
}
