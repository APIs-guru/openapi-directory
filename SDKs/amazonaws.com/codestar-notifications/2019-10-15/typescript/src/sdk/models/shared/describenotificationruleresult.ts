import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailTypeEnum } from "./detailtypeenum";
import { EventTypeSummary } from "./eventtypesummary";
import { NotificationRuleStatusEnum } from "./notificationrulestatusenum";
import { TargetSummary } from "./targetsummary";



export class DescribeNotificationRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=DetailType" })
  detailType?: DetailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EventTypes", elemType: EventTypeSummary })
  eventTypes?: EventTypeSummary[];

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: NotificationRuleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: TargetSummary })
  targets?: TargetSummary[];
}
