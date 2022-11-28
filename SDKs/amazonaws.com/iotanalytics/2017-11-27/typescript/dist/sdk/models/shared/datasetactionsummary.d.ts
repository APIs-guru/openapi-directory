import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetActionTypeEnum } from "./datasetactiontypeenum";
/**
 * Information about the action that automatically creates the dataset's contents.
**/
export declare class DatasetActionSummary extends SpeakeasyBase {
    actionName?: string;
    actionType?: DatasetActionTypeEnum;
}
