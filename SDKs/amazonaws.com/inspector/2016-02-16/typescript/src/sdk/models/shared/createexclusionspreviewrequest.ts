import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateExclusionsPreviewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;
}
