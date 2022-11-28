import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetActionSummary } from "./datasetactionsummary";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTrigger } from "./datasettrigger";
/**
 * A summary of information about a dataset.
**/
export declare class DatasetSummary extends SpeakeasyBase {
    actions?: DatasetActionSummary[];
    creationTime?: Date;
    datasetName?: string;
    lastUpdateTime?: Date;
    status?: DatasetStatusEnum;
    triggers?: DatasetTrigger[];
}
