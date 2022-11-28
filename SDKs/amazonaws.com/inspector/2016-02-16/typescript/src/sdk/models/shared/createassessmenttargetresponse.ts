import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAssessmentTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;
}
