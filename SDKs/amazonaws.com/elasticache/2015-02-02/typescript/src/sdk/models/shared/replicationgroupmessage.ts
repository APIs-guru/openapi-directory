import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";



// ReplicationGroupMessage
/** 
 * Represents the output of a <code>DescribeReplicationGroups</code> operation.
**/
export class ReplicationGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReplicationGroup })
  replicationGroups?: ReplicationGroup[];
}
