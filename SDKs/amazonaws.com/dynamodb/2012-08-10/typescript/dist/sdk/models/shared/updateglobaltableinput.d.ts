import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaUpdate } from "./replicaupdate";
export declare class UpdateGlobalTableInput extends SpeakeasyBase {
    globalTableName: string;
    replicaUpdates: ReplicaUpdate[];
}
