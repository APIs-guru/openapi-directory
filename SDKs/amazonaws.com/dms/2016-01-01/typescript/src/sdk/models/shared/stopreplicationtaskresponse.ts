import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTask } from "./replicationtask";


// StopReplicationTaskResponse
/** 
 * <p/>
**/
export class StopReplicationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
