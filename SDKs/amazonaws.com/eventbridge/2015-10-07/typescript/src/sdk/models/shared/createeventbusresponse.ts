import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEventBusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusArn" })
  eventBusArn?: string;
}
