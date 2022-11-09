import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerDatasetAction } from "./containerdatasetaction";
import { SqlQueryDatasetAction } from "./sqlquerydatasetaction";


// DatasetAction
/** 
 * A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
**/
export class DatasetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=containerAction" })
  containerAction?: ContainerDatasetAction;

  @Metadata({ data: "json, name=queryAction" })
  queryAction?: SqlQueryDatasetAction;
}
