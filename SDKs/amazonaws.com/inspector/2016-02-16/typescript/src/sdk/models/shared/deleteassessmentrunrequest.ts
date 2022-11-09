import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAssessmentRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;
}
