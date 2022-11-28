import { SpeakeasyBase } from "../../../internal/utils";
import { TriggerProperties } from "./triggerproperties";
import { TriggerTypeEnum } from "./triggertypeenum";
/**
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
**/
export declare class TriggerConfig extends SpeakeasyBase {
    triggerProperties?: TriggerProperties;
    triggerType: TriggerTypeEnum;
}
