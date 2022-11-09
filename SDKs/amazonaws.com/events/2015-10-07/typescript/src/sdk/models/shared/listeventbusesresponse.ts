import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventBus } from "./eventbus";


export class ListEventBusesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBuses", elemType: shared.EventBus })
  eventBuses?: EventBus[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
