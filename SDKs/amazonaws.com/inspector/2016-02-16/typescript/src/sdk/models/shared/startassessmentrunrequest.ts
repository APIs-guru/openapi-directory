import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAssessmentRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunName" })
  assessmentRunName?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
