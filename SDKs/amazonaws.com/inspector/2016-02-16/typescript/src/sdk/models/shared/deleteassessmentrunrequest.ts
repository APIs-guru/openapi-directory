import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAssessmentRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;
}
