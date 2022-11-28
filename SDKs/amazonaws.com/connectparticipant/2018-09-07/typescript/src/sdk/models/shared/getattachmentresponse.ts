import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=UrlExpiry" })
  urlExpiry?: string;
}
