import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { AuditFrequencyEnum } from "./auditfrequencyenum";
/**
 * Information about the scheduled audit.
**/
export declare class ScheduledAuditMetadata extends SpeakeasyBase {
    dayOfMonth?: string;
    dayOfWeek?: DayOfWeekEnum;
    frequency?: AuditFrequencyEnum;
    scheduledAuditArn?: string;
    scheduledAuditName?: string;
}
