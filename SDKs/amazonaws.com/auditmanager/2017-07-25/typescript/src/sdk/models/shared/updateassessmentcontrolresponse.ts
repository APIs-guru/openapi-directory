import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentControl } from "./assessmentcontrol";



export class UpdateAssessmentControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: AssessmentControl;
}
