import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTask } from "./replicationtask";



// DeleteReplicationTaskResponse
/** 
 * <p/>
**/
export class DeleteReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
