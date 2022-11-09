import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentStateEnum } from "./datasetcontentstateenum";


// DatasetContentStatus
/** 
 * The state of the dataset contents and the reason they are in this state.
**/
export class DatasetContentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=state" })
  state?: DatasetContentStateEnum;
}
