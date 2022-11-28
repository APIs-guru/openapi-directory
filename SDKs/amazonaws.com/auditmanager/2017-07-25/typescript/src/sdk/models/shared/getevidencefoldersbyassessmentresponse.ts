import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";



export class GetEvidenceFoldersByAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceFolders", elemType: AssessmentEvidenceFolder })
  evidenceFolders?: AssessmentEvidenceFolder[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
