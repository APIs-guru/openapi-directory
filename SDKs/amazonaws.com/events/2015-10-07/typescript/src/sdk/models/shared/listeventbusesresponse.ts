import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventBus } from "./eventbus";



export class ListEventBusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBuses", elemType: EventBus })
  eventBuses?: EventBus[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
