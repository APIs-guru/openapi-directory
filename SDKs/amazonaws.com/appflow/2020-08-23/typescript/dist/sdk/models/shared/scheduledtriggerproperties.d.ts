import { SpeakeasyBase } from "../../../internal/utils";
import { DataPullModeEnum } from "./datapullmodeenum";
/**
 *  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type.
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
