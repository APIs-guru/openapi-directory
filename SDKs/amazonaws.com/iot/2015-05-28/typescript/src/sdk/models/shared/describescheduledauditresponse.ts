import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { AuditFrequencyEnum } from "./auditfrequencyenum";



export class DescribeScheduledAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: DayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: AuditFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduledAuditArn" })
  scheduledAuditArn?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledAuditName" })
  scheduledAuditName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCheckNames" })
  targetCheckNames?: string[];
}
