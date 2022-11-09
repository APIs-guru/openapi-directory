import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetailTypeEnum } from "./detailtypeenum";
import { EventTypeSummary } from "./eventtypesummary";
import { NotificationRuleStatusEnum } from "./notificationrulestatusenum";
import { TargetSummary } from "./targetsummary";


export class DescribeNotificationRuleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=DetailType" })
  detailType?: DetailTypeEnum;

  @Metadata({ data: "json, name=EventTypes", elemType: shared.EventTypeSummary })
  eventTypes?: EventTypeSummary[];

  @Metadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Resource" })
  resource?: string;

  @Metadata({ data: "json, name=Status" })
  status?: NotificationRuleStatusEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Targets", elemType: shared.TargetSummary })
  targets?: TargetSummary[];
}
