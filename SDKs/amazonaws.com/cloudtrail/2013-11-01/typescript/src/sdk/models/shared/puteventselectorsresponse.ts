import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventSelector } from "./eventselector";



export class PutEventSelectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdvancedEventSelectors", elemType: AdvancedEventSelector })
  advancedEventSelectors?: AdvancedEventSelector[];

  @SpeakeasyMetadata({ data: "json, name=EventSelectors", elemType: EventSelector })
  eventSelectors?: EventSelector[];

  @SpeakeasyMetadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
