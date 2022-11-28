import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAssessmentTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
