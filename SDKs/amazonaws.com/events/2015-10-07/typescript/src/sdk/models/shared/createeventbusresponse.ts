import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEventBusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusArn" })
  eventBusArn?: string;
}
