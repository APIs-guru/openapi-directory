import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartAssessmentRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunName" })
  assessmentRunName?: string;

  @Metadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
