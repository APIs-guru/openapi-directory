import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTask } from "./replicationtask";



// StartReplicationTaskResponse
/** 
 * <p/>
**/
export class StartReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
