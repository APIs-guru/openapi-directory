import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveReplicationTaskMessage
/** 
 * <p/>
**/
export class MoveReplicationTaskMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @Metadata({ data: "json, name=TargetReplicationInstanceArn" })
  targetReplicationInstanceArn: string;
}
