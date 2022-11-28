import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetActionSummary } from "./datasetactionsummary";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTrigger } from "./datasettrigger";



// DatasetSummary
/** 
 * A summary of information about a dataset.
**/
export class DatasetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: DatasetActionSummary })
  actions?: DatasetActionSummary[];

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DatasetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: DatasetTrigger })
  triggers?: DatasetTrigger[];
}
