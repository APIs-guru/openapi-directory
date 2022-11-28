import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstanceTaskLog } from "./replicationinstancetasklog";



export class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceTaskLogs", elemType: ReplicationInstanceTaskLog })
  replicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];
}
