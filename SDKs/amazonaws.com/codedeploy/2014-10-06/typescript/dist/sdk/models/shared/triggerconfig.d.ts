import { SpeakeasyBase } from "../../../internal/utils";
import { TriggerEventTypeEnum } from "./triggereventtypeenum";
/**
 * Information about notification triggers for the deployment group.
**/
export declare class TriggerConfig extends SpeakeasyBase {
    triggerEvents?: TriggerEventTypeEnum[];
    triggerName?: string;
    triggerTargetArn?: string;
}
