import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationDestination } from "./replicationdestination";


// ReplicationRule
/** 
 * An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
**/
export class ReplicationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.ReplicationDestination })
  destinations: ReplicationDestination[];
}
