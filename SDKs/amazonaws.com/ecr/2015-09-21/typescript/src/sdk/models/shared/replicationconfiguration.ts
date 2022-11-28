import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationRule } from "./replicationrule";



// ReplicationConfiguration
/** 
 * The replication configuration for a registry.
**/
export class ReplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: ReplicationRule })
  rules: ReplicationRule[];
}
