import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
/**
 * Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.
**/
export declare class DatasetSummary extends SpeakeasyBase {
    creationTime?: Date;
    datasetArn?: string;
    datasetName?: string;
    datasetType?: DatasetTypeEnum;
    domain?: DomainEnum;
    lastModificationTime?: Date;
}
