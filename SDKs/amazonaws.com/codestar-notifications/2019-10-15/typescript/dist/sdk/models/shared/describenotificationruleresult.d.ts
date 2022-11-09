import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetailTypeEnum } from "./detailtypeenum";
import { EventTypeSummary } from "./eventtypesummary";
import { NotificationRuleStatusEnum } from "./notificationrulestatusenum";
import { TargetSummary } from "./targetsummary";
export declare class DescribeNotificationRuleResult extends SpeakeasyBase {
    arn: string;
    createdBy?: string;
    createdTimestamp?: Date;
    detailType?: DetailTypeEnum;
    eventTypes?: EventTypeSummary[];
    lastModifiedTimestamp?: Date;
    name?: string;
    resource?: string;
    status?: NotificationRuleStatusEnum;
    tags?: Map<string, string>;
    targets?: TargetSummary[];
}
