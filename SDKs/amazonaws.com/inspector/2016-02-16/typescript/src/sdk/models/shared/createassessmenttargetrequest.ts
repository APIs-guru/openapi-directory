import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAssessmentTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTargetName" })
  assessmentTargetName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;
}
