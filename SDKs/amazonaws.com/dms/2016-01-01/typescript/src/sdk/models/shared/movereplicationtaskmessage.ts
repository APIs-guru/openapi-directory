import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoveReplicationTaskMessage
/** 
 * <p/>
**/
export class MoveReplicationTaskMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @SpeakeasyMetadata({ data: "json, name=TargetReplicationInstanceArn" })
  targetReplicationInstanceArn: string;
}
