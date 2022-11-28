import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";



export class GetEvidenceFoldersByAssessmentControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceFolders", elemType: AssessmentEvidenceFolder })
  evidenceFolders?: AssessmentEvidenceFolder[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
