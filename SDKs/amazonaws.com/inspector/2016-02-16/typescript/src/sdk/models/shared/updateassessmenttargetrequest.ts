import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAssessmentTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentTargetName" })
  assessmentTargetName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;
}
