import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";



export class GetEvidenceFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceFolder" })
  evidenceFolder?: AssessmentEvidenceFolder;
}
