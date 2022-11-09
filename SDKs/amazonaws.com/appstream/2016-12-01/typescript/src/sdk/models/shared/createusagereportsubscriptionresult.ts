import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";


export class CreateUsageReportSubscriptionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: UsageReportScheduleEnum;
}
