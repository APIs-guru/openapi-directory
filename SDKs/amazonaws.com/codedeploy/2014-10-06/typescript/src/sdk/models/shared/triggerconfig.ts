import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggerEventTypeEnum } from "./triggereventtypeenum";


// TriggerConfig
/** 
 * Information about notification triggers for the deployment group.
**/
export class TriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=triggerEvents" })
  triggerEvents?: TriggerEventTypeEnum[];

  @Metadata({ data: "json, name=triggerName" })
  triggerName?: string;

  @Metadata({ data: "json, name=triggerTargetArn" })
  triggerTargetArn?: string;
}
