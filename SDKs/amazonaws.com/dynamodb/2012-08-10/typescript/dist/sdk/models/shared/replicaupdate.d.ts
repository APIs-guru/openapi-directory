import { SpeakeasyBase } from "../../../internal/utils";
import { CreateReplicaAction } from "./createreplicaaction";
import { DeleteReplicaAction } from "./deletereplicaaction";
/**
 * <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>
**/
export declare class ReplicaUpdate extends SpeakeasyBase {
    create?: CreateReplicaAction;
    delete?: DeleteReplicaAction;
}
