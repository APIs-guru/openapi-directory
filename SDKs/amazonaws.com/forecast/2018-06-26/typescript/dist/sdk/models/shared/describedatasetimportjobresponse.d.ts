import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";
import { Statistics } from "./statistics";
export declare class DescribeDatasetImportJobResponse extends SpeakeasyBase {
    creationTime?: Date;
    dataSize?: number;
    dataSource?: DataSource;
    datasetArn?: string;
    datasetImportJobArn?: string;
    datasetImportJobName?: string;
    estimatedTimeRemainingInMinutes?: number;
    fieldStatistics?: Map<string, Statistics>;
    geolocationFormat?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    timeZone?: string;
    timestampFormat?: string;
    useGeolocationForTimeZone?: boolean;
}
