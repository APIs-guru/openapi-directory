import { SpeakeasyBase } from "../../../internal/utils";
import { TriggerTypeEnum } from "./triggertypeenum";
/**
 * The interaction or event that started a pipeline execution.
**/
export declare class ExecutionTrigger extends SpeakeasyBase {
    triggerDetail?: string;
    triggerType?: TriggerTypeEnum;
}
