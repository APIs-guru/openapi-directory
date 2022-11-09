import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentStateEnum } from "./datasetcontentstateenum";
/**
 * The state of the dataset contents and the reason they are in this state.
**/
export declare class DatasetContentStatus extends SpeakeasyBase {
    reason?: string;
    state?: DatasetContentStateEnum;
}
