import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationDestination } from "./replicationdestination";



// ReplicationRule
/** 
 * An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
**/
export class ReplicationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: ReplicationDestination })
  destinations: ReplicationDestination[];
}
