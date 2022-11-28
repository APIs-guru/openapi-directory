import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTask } from "./replicationtask";



// CreateReplicationTaskResponse
/** 
 * <p/>
**/
export class CreateReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTask" })
  replicationTask?: ReplicationTask;
}
