import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TriggerTypeEnum } from "./triggertypeenum";



// ExecutionTrigger
/** 
 * The interaction or event that started a pipeline execution.
**/
export class ExecutionTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=triggerDetail" })
  triggerDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerType" })
  triggerType?: TriggerTypeEnum;
}
