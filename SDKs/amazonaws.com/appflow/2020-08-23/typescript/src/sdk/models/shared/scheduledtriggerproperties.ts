import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataPullModeEnum } from "./datapullmodeenum";


// ScheduledTriggerProperties
/** 
 *  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
**/
export class ScheduledTriggerProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataPullMode" })
  dataPullMode?: DataPullModeEnum;

  @Metadata({ data: "json, name=firstExecutionFrom" })
  firstExecutionFrom?: Date;

  @Metadata({ data: "json, name=scheduleEndTime" })
  scheduleEndTime?: Date;

  @Metadata({ data: "json, name=scheduleExpression" })
  scheduleExpression: string;

  @Metadata({ data: "json, name=scheduleOffset" })
  scheduleOffset?: number;

  @Metadata({ data: "json, name=scheduleStartTime" })
  scheduleStartTime?: Date;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
