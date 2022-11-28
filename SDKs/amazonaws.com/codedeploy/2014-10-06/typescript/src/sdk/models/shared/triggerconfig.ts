import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TriggerEventTypeEnum } from "./triggereventtypeenum";



// TriggerConfig
/** 
 * Information about notification triggers for the deployment group.
**/
export class TriggerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=triggerEvents" })
  triggerEvents?: TriggerEventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=triggerName" })
  triggerName?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerTargetArn" })
  triggerTargetArn?: string;
}
