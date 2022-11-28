import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerDatasetAction } from "./containerdatasetaction";
import { SqlQueryDatasetAction } from "./sqlquerydatasetaction";
/**
 * A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
**/
export declare class DatasetAction extends SpeakeasyBase {
    actionName?: string;
    containerAction?: ContainerDatasetAction;
    queryAction?: SqlQueryDatasetAction;
}
