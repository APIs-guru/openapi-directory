import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
import { FormatEnum } from "./formatenum";
import { ReportFrequencyEnum } from "./reportfrequencyenum";
/**
 * The configuration of a report in AWS Application Cost Profiler.
**/
export declare class ReportDefinition extends SpeakeasyBase {
    createdAt?: Date;
    destinationS3Location?: S3Location;
    format?: FormatEnum;
    lastUpdatedAt?: Date;
    reportDescription?: string;
    reportFrequency?: ReportFrequencyEnum;
    reportId?: string;
}
