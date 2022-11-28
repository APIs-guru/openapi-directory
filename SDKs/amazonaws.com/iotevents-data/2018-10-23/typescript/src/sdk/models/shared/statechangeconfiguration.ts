import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TriggerTypeEnum } from "./triggertypeenum";



// StateChangeConfiguration
/** 
 * Contains the configuration information of alarm state changes.
**/
export class StateChangeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=triggerType" })
  triggerType?: TriggerTypeEnum;
}
