import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentControlSet } from "./assessmentcontrolset";


export class UpdateAssessmentControlSetStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=controlSet" })
  controlSet?: AssessmentControlSet;
}
