import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStreamingUrlResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expires" })
  expires?: Date;

  @SpeakeasyMetadata({ data: "json, name=StreamingURL" })
  streamingUrl?: string;
}
