import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTriggerProperties } from "./scheduledtriggerproperties";



// TriggerProperties
/** 
 * Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
**/
export class TriggerProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Scheduled" })
  scheduled?: ScheduledTriggerProperties;
}
