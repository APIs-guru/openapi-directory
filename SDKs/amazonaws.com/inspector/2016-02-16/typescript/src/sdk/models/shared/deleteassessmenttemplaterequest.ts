import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAssessmentTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
