import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventSource } from "./eventsource";


export class ListEventSourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSources", elemType: shared.EventSource })
  eventSources?: EventSource[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
