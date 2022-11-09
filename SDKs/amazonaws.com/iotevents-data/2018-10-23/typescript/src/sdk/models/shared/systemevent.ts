import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTypeEnum } from "./eventtypeenum";
import { StateChangeConfiguration } from "./statechangeconfiguration";


// SystemEvent
/** 
 * Contains information about alarm state changes.
**/
export class SystemEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventType" })
  eventType?: EventTypeEnum;

  @Metadata({ data: "json, name=stateChangeConfiguration" })
  stateChangeConfiguration?: StateChangeConfiguration;
}
