import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventSelector } from "./eventselector";


export class PutEventSelectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdvancedEventSelectors", elemType: shared.AdvancedEventSelector })
  advancedEventSelectors?: AdvancedEventSelector[];

  @Metadata({ data: "json, name=EventSelectors", elemType: shared.EventSelector })
  eventSelectors?: EventSelector[];

  @Metadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
