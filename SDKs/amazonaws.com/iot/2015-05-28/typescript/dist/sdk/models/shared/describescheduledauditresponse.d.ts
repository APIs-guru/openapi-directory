import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { AuditFrequencyEnum } from "./auditfrequencyenum";
export declare class DescribeScheduledAuditResponse extends SpeakeasyBase {
    dayOfMonth?: string;
    dayOfWeek?: DayOfWeekEnum;
    frequency?: AuditFrequencyEnum;
    scheduledAuditArn?: string;
    scheduledAuditName?: string;
    targetCheckNames?: string[];
}
