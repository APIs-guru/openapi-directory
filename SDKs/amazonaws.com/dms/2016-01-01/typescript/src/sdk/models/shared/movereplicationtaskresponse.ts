import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTask } from "./replicationtask";


// MoveReplicationTaskResponse
/** 
 * <p/>
**/
export class MoveReplicationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
