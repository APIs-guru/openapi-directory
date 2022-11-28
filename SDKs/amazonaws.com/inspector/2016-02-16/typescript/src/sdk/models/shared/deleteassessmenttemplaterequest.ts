import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAssessmentTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
