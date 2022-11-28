import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlarmCapabilities } from "./alarmcapabilities";
import { AlarmEventActions } from "./alarmeventactions";
import { AlarmNotification } from "./alarmnotification";
import { AlarmRule } from "./alarmrule";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";



export class DescribeAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmCapabilities" })
  alarmCapabilities?: AlarmCapabilities;

  @SpeakeasyMetadata({ data: "json, name=alarmEventActions" })
  alarmEventActions?: AlarmEventActions;

  @SpeakeasyMetadata({ data: "json, name=alarmModelArn" })
  alarmModelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelDescription" })
  alarmModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelName" })
  alarmModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmModelVersion" })
  alarmModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=alarmNotification" })
  alarmNotification?: AlarmNotification;

  @SpeakeasyMetadata({ data: "json, name=alarmRule" })
  alarmRule?: AlarmRule;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AlarmModelVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
