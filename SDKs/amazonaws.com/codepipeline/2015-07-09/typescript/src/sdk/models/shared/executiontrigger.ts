import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggerTypeEnum } from "./triggertypeenum";


// ExecutionTrigger
/** 
 * The interaction or event that started a pipeline execution.
**/
export class ExecutionTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=triggerDetail" })
  triggerDetail?: string;

  @Metadata({ data: "json, name=triggerType" })
  triggerType?: TriggerTypeEnum;
}
