import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggerTypeEnum } from "./triggertypeenum";


// StateChangeConfiguration
/** 
 * Contains the configuration information of alarm state changes.
**/
export class StateChangeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=triggerType" })
  triggerType?: TriggerTypeEnum;
}
