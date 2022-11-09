import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAssessmentTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;

  @Metadata({ data: "json, name=assessmentTargetName" })
  assessmentTargetName: string;

  @Metadata({ data: "json, name=resourceGroupArn" })
  resourceGroupArn?: string;
}
