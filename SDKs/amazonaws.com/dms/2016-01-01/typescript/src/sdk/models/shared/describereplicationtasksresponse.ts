import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationTask } from "./replicationtask";


// DescribeReplicationTasksResponse
/** 
 * <p/>
**/
export class DescribeReplicationTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationTasks", elemType: shared.ReplicationTask })
  replicationTasks?: ReplicationTask[];
}
