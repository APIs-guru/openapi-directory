import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventInformation } from "./eventinformation";
import { EventTypeEnum } from "./eventtypeenum";



// HistoryRecord
/** 
 * Describes an event in the history of the Spot Fleet request.
**/
export class HistoryRecord extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventInformation?: EventInformation;

  @SpeakeasyMetadata()
  eventType?: EventTypeEnum;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
