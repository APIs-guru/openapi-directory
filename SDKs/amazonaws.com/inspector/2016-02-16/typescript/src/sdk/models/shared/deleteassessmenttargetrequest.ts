import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAssessmentTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTargetArn" })
  assessmentTargetArn: string;
}
