import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateStreamingUrlResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expires" })
  expires?: Date;

  @Metadata({ data: "json, name=StreamingURL" })
  streamingUrl?: string;
}
