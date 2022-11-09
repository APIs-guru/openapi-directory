import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlarmCapabilities } from "./alarmcapabilities";
import { AlarmEventActions } from "./alarmeventactions";
import { AlarmNotification } from "./alarmnotification";
import { AlarmRule } from "./alarmrule";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";


export class DescribeAlarmModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmCapabilities" })
  alarmCapabilities?: AlarmCapabilities;

  @Metadata({ data: "json, name=alarmEventActions" })
  alarmEventActions?: AlarmEventActions;

  @Metadata({ data: "json, name=alarmModelArn" })
  alarmModelArn?: string;

  @Metadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @Metadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @Metadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @Metadata({ data: "json, name=alarmNotification" })
  alarmNotification?: AlarmNotification;

  @Metadata({ data: "json, name=alarmRule" })
  alarmRule?: AlarmRule;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=status" })
  status?: AlarmModelVersionStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
