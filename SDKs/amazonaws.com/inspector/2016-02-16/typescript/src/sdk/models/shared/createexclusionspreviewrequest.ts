import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateExclusionsPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
