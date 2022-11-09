import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduledTriggerProperties } from "./scheduledtriggerproperties";


// TriggerProperties
/** 
 *  Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
**/
export class TriggerProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Scheduled" })
  scheduled?: ScheduledTriggerProperties;
}
