import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaSettingsDescription } from "./replicasettingsdescription";
export declare class DescribeGlobalTableSettingsOutput extends SpeakeasyBase {
    globalTableName?: string;
    replicaSettings?: ReplicaSettingsDescription[];
}
