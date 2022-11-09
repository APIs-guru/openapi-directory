import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateExclusionsPreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=previewToken" })
  previewToken: string;
}
