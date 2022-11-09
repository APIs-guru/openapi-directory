import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventTypeSummary } from "./eventtypesummary";


export class ListEventTypesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventTypes", elemType: shared.EventTypeSummary })
  eventTypes?: EventTypeSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
