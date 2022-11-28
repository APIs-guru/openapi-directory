import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeSummary } from "./eventtypesummary";



export class ListEventTypesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventTypes", elemType: EventTypeSummary })
  eventTypes?: EventTypeSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
