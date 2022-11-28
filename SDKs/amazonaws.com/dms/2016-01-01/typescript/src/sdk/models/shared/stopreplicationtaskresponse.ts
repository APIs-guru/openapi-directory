import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTask } from "./replicationtask";



// StopReplicationTaskResponse
/** 
 * <p/>
**/
export class StopReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
