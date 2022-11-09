import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTask } from "./replicationtask";


// DeleteReplicationTaskResponse
/** 
 * <p/>
**/
export class DeleteReplicationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
