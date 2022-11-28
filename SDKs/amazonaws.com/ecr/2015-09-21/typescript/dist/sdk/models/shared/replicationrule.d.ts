import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationDestination } from "./replicationdestination";
/**
 * An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
**/
export declare class ReplicationRule extends SpeakeasyBase {
    destinations: ReplicationDestination[];
}
