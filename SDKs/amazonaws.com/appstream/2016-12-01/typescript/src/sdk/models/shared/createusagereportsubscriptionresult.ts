import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";



export class CreateUsageReportSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: UsageReportScheduleEnum;
}
