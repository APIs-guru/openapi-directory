import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTask } from "./replicationtask";



// MoveReplicationTaskResponse
/** 
 * <p/>
**/
export class MoveReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
