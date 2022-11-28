import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAssessmentTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;
}
