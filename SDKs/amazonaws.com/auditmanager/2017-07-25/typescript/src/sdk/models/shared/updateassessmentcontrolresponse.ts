import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentControl } from "./assessmentcontrol";


export class UpdateAssessmentControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: AssessmentControl;
}
