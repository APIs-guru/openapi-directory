import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTask } from "./replicationtask";


// StartReplicationTaskResponse
/** 
 * <p/>
**/
export class StartReplicationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
