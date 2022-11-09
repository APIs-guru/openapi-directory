import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";


export class GetEvidenceFoldersByAssessmentControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceFolders", elemType: shared.AssessmentEvidenceFolder })
  evidenceFolders?: AssessmentEvidenceFolder[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
