import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSource } from "./eventsource";



export class ListEventSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSources", elemType: EventSource })
  eventSources?: EventSource[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
