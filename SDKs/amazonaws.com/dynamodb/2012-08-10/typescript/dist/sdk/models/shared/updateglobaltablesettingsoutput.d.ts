import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaSettingsDescription } from "./replicasettingsdescription";
export declare class UpdateGlobalTableSettingsOutput extends SpeakeasyBase {
    globalTableName?: string;
    replicaSettings?: ReplicaSettingsDescription[];
}
