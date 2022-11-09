import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetActionSummary } from "./datasetactionsummary";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTrigger } from "./datasettrigger";


// DatasetSummary
/** 
 * A summary of information about a dataset.
**/
export class DatasetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.DatasetActionSummary })
  actions?: DatasetActionSummary[];

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=datasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: DatasetStatusEnum;

  @Metadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger })
  triggers?: DatasetTrigger[];
}
