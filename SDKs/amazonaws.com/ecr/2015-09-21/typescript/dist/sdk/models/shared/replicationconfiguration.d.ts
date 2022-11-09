import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationRule } from "./replicationrule";
/**
 * The replication configuration for a registry.
**/
export declare class ReplicationConfiguration extends SpeakeasyBase {
    rules: ReplicationRule[];
}
