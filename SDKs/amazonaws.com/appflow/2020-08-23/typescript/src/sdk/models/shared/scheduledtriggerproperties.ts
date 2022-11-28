import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPullModeEnum } from "./datapullmodeenum";



// ScheduledTriggerProperties
/** 
 *  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
**/
export class ScheduledTriggerProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataPullMode" })
  dataPullMode?: DataPullModeEnum;

  @SpeakeasyMetadata({ data: "json, name=firstExecutionFrom" })
  firstExecutionFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndTime" })
  scheduleEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduleExpression" })
  scheduleExpression: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleOffset" })
  scheduleOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartTime" })
  scheduleStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
