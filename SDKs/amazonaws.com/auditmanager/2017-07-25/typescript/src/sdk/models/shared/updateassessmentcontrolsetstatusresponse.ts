import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentControlSet } from "./assessmentcontrolset";



export class UpdateAssessmentControlSetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlSet" })
  controlSet?: AssessmentControlSet;
}
