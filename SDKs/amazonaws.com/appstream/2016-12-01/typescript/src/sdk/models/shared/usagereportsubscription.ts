import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";
import { LastReportGenerationExecutionError } from "./lastreportgenerationexecutionerror";



// UsageReportSubscription
/** 
 * Describes information about the usage report subscription.
**/
export class UsageReportSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastGeneratedReportDate" })
  lastGeneratedReportDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: UsageReportScheduleEnum;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionErrors", elemType: LastReportGenerationExecutionError })
  subscriptionErrors?: LastReportGenerationExecutionError[];
}
