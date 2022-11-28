import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentStateEnum } from "./datasetcontentstateenum";



// DatasetContentStatus
/** 
 * The state of the dataset contents and the reason they are in this state.
**/
export class DatasetContentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DatasetContentStateEnum;
}
