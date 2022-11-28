import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TriggerProperties } from "./triggerproperties";
import { TriggerTypeEnum } from "./triggertypeenum";



// TriggerConfig
/** 
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
export class TriggerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TriggerProperties" })
  triggerProperties?: TriggerProperties;

  @SpeakeasyMetadata({ data: "json, name=TriggerType" })
  triggerType: TriggerTypeEnum;
}
