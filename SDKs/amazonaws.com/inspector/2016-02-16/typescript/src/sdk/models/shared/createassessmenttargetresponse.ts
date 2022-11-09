import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAssessmentTargetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;
}
