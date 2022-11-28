import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTriggerProperties } from "./scheduledtriggerproperties";
/**
 * Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
**/
export declare class TriggerProperties extends SpeakeasyBase {
    scheduled?: ScheduledTriggerProperties;
}
