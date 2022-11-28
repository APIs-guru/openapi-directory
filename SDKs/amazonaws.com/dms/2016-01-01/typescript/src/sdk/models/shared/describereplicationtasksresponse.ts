import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTask } from "./replicationtask";



// DescribeReplicationTasksResponse
/** 
 * <p/>
**/
export class DescribeReplicationTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTasks", elemType: ReplicationTask })
  replicationTasks?: ReplicationTask[];
}
