import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalReplicationGroupInfo
/** 
 * The name of the Global datastore and role of this replication group in the Global datastore.
**/
export class GlobalReplicationGroupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroupId?: string;

  @SpeakeasyMetadata()
  globalReplicationGroupMemberRole?: string;
}
