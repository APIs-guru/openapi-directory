import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalTableStatusEnum } from "./globaltablestatusenum";
import { ReplicaDescription } from "./replicadescription";
/**
 * Contains details about the global table.
**/
export declare class GlobalTableDescription extends SpeakeasyBase {
    creationDateTime?: Date;
    globalTableArn?: string;
    globalTableName?: string;
    globalTableStatus?: GlobalTableStatusEnum;
    replicationGroup?: ReplicaDescription[];
}
