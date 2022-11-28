import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateExclusionsPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previewToken" })
  previewToken: string;
}
