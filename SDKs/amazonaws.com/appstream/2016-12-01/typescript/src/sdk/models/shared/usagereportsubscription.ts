import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";
import { LastReportGenerationExecutionError } from "./lastreportgenerationexecutionerror";


// UsageReportSubscription
/** 
 * Describes information about the usage report subscription.
**/
export class UsageReportSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastGeneratedReportDate" })
  lastGeneratedReportDate?: Date;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: UsageReportScheduleEnum;

  @Metadata({ data: "json, name=SubscriptionErrors", elemType: shared.LastReportGenerationExecutionError })
  subscriptionErrors?: LastReportGenerationExecutionError[];
}
