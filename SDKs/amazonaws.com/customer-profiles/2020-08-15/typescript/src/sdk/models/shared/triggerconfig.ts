import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggerProperties } from "./triggerproperties";
import { TriggerTypeEnum } from "./triggertypeenum";


// TriggerConfig
/** 
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
export class TriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=TriggerProperties" })
  triggerProperties?: TriggerProperties;

  @Metadata({ data: "json, name=TriggerType" })
  triggerType: TriggerTypeEnum;
}
