import { SpeakeasyBase } from "../../../internal/utils";
import { CreateGlobalSecondaryIndexAction } from "./createglobalsecondaryindexaction";
import { DeleteGlobalSecondaryIndexAction } from "./deleteglobalsecondaryindexaction";
import { UpdateGlobalSecondaryIndexAction } from "./updateglobalsecondaryindexaction";
/**
 * <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
**/
export declare class GlobalSecondaryIndexUpdate extends SpeakeasyBase {
    create?: CreateGlobalSecondaryIndexAction;
    delete?: DeleteGlobalSecondaryIndexAction;
    update?: UpdateGlobalSecondaryIndexAction;
}
