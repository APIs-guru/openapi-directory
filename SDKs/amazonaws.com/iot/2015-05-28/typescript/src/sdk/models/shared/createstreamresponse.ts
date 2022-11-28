import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=streamArn" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=streamId" })
  streamId?: string;

  @SpeakeasyMetadata({ data: "json, name=streamVersion" })
  streamVersion?: number;
}
