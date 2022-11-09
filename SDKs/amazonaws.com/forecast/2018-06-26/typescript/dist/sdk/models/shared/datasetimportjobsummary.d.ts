import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";
/**
 * Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
**/
export declare class DatasetImportJobSummary extends SpeakeasyBase {
    creationTime?: Date;
    dataSource?: DataSource;
    datasetImportJobArn?: string;
    datasetImportJobName?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
}
