import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalNodeGroup } from "./globalnodegroup";
import { GlobalReplicationGroupMember } from "./globalreplicationgroupmember";



// GlobalReplicationGroup
/** 
 * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>
**/
export class GlobalReplicationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata()
  authTokenEnabled?: boolean;

  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  clusterEnabled?: boolean;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata({ elemType: GlobalNodeGroup })
  globalNodeGroups?: GlobalNodeGroup[];

  @SpeakeasyMetadata()
  globalReplicationGroupDescription?: string;

  @SpeakeasyMetadata()
  globalReplicationGroupId?: string;

  @SpeakeasyMetadata({ elemType: GlobalReplicationGroupMember })
  members?: GlobalReplicationGroupMember[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  transitEncryptionEnabled?: boolean;
}
