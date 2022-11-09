import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataPullModeEnum } from "./datapullmodeenum";


// ScheduledTriggerProperties
/** 
 * Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
**/
export class ScheduledTriggerProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataPullMode" })
  dataPullMode?: DataPullModeEnum;

  @Metadata({ data: "json, name=FirstExecutionFrom" })
  firstExecutionFrom?: Date;

  @Metadata({ data: "json, name=ScheduleEndTime" })
  scheduleEndTime?: Date;

  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression: string;

  @Metadata({ data: "json, name=ScheduleOffset" })
  scheduleOffset?: number;

  @Metadata({ data: "json, name=ScheduleStartTime" })
  scheduleStartTime?: Date;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
