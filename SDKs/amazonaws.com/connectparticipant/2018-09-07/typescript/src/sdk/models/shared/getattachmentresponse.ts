import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAttachmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=UrlExpiry" })
  urlExpiry?: string;
}
