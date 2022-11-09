import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggeringDataset } from "./triggeringdataset";
import { Schedule } from "./schedule";
/**
 * The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
**/
export declare class DatasetTrigger extends SpeakeasyBase {
    dataset?: TriggeringDataset;
    schedule?: Schedule;
}
