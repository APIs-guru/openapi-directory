import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetActionTypeEnum } from "./datasetactiontypeenum";



// DatasetActionSummary
/** 
 * Information about the action that automatically creates the dataset's contents.
**/
export class DatasetActionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: DatasetActionTypeEnum;
}
