import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggeringDataset } from "./triggeringdataset";
import { Schedule } from "./schedule";


// DatasetTrigger
/** 
 * The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
**/
export class DatasetTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: TriggeringDataset;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Schedule;
}
