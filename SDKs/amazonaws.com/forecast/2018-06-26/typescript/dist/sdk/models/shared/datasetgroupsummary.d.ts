import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.
**/
export declare class DatasetGroupSummary extends SpeakeasyBase {
    creationTime?: Date;
    datasetGroupArn?: string;
    datasetGroupName?: string;
    lastModificationTime?: Date;
}
