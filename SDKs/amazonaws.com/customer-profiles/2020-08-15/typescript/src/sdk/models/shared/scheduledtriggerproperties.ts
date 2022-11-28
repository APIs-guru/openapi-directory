import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPullModeEnum } from "./datapullmodeenum";



// ScheduledTriggerProperties
/** 
 * Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
**/
export class ScheduledTriggerProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataPullMode" })
  dataPullMode?: DataPullModeEnum;

  @SpeakeasyMetadata({ data: "json, name=FirstExecutionFrom" })
  firstExecutionFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=ScheduleEndTime" })
  scheduleEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduleOffset" })
  scheduleOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=ScheduleStartTime" })
  scheduleStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
