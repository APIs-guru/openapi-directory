import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { FormatEnum } from "./formatenum";
import { ReportFrequencyEnum } from "./reportfrequencyenum";
export declare class GetReportDefinitionResult extends SpeakeasyBase {
    createdAt: Date;
    destinationS3Location: S3Location;
    format: FormatEnum;
    lastUpdated: Date;
    reportDescription: string;
    reportFrequency: ReportFrequencyEnum;
    reportId: string;
}
