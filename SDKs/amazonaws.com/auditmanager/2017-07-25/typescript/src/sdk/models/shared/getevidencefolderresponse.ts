import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";


export class GetEvidenceFolderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceFolder" })
  evidenceFolder?: AssessmentEvidenceFolder;
}
