import { SpeakeasyBase } from "../../../internal/utils";
import { DataPullModeEnum } from "./datapullmodeenum";
/**
 * Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
**/
export declare class ScheduledTriggerProperties extends SpeakeasyBase {
    dataPullMode?: DataPullModeEnum;
    firstExecutionFrom?: Date;
    scheduleEndTime?: Date;
    scheduleExpression: string;
    scheduleOffset?: number;
    scheduleStartTime?: Date;
    timezone?: string;
}
