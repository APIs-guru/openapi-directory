import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetActionTypeEnum } from "./datasetactiontypeenum";


// DatasetActionSummary
/** 
 * Information about the action that automatically creates the dataset's contents.
**/
export class DatasetActionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=actionType" })
  actionType?: DatasetActionTypeEnum;
}
