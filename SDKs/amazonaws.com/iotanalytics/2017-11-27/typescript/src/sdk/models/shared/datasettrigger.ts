import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TriggeringDataset } from "./triggeringdataset";
import { Schedule } from "./schedule";



// DatasetTrigger
/** 
 * The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
**/
export class DatasetTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: TriggeringDataset;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Schedule;
}
