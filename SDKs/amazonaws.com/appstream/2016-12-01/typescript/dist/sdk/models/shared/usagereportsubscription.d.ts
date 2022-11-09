import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageReportScheduleEnum } from "./usagereportscheduleenum";
import { LastReportGenerationExecutionError } from "./lastreportgenerationexecutionerror";
/**
 * Describes information about the usage report subscription.
**/
export declare class UsageReportSubscription extends SpeakeasyBase {
    lastGeneratedReportDate?: Date;
    s3BucketName?: string;
    schedule?: UsageReportScheduleEnum;
    subscriptionErrors?: LastReportGenerationExecutionError[];
}
