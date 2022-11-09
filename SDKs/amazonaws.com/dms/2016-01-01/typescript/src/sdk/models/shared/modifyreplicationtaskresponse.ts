import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTask } from "./replicationtask";


// ModifyReplicationTaskResponse
/** 
 * <p/>
**/
export class ModifyReplicationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
