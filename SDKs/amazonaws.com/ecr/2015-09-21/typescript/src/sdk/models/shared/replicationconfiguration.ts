import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationRule } from "./replicationrule";


// ReplicationConfiguration
/** 
 * The replication configuration for a registry.
**/
export class ReplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ReplicationRule })
  rules: ReplicationRule[];
}
