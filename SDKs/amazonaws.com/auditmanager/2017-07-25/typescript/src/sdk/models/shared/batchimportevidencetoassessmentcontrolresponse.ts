import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchImportEvidenceToAssessmentControlError } from "./batchimportevidencetoassessmentcontrolerror";


export class BatchImportEvidenceToAssessmentControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.BatchImportEvidenceToAssessmentControlError })
  errors?: BatchImportEvidenceToAssessmentControlError[];
}
