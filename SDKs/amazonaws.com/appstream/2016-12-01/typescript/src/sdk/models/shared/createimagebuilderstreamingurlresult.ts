import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateImageBuilderStreamingUrlResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expires" })
  expires?: Date;

  @SpeakeasyMetadata({ data: "json, name=StreamingURL" })
  streamingUrl?: string;
}
