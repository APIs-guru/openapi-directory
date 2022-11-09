import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { AuditFrequencyEnum } from "./auditfrequencyenum";


export class DescribeScheduledAuditResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: string;

  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: DayOfWeekEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency?: AuditFrequencyEnum;

  @Metadata({ data: "json, name=scheduledAuditArn" })
  scheduledAuditArn?: string;

  @Metadata({ data: "json, name=scheduledAuditName" })
  scheduledAuditName?: string;

  @Metadata({ data: "json, name=targetCheckNames" })
  targetCheckNames?: string[];
}
