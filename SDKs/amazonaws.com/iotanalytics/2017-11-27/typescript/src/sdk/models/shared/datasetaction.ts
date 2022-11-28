import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerDatasetAction } from "./containerdatasetaction";
import { SqlQueryDatasetAction } from "./sqlquerydatasetaction";



// DatasetAction
/** 
 * A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
**/
export class DatasetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerAction" })
  containerAction?: ContainerDatasetAction;

  @SpeakeasyMetadata({ data: "json, name=queryAction" })
  queryAction?: SqlQueryDatasetAction;
}
