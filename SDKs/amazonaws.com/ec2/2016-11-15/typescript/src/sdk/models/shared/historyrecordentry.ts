import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventInformation } from "./eventinformation";
import { FleetEventTypeEnum } from "./fleeteventtypeenum";



// HistoryRecordEntry
/** 
 * Describes an event in the history of an EC2 Fleet.
**/
export class HistoryRecordEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventInformation?: EventInformation;

  @SpeakeasyMetadata()
  eventType?: FleetEventTypeEnum;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
