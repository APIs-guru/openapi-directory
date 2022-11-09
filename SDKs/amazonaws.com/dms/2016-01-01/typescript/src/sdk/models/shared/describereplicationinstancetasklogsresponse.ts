import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationInstanceTaskLog } from "./replicationinstancetasklog";


export class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @Metadata({ data: "json, name=ReplicationInstanceTaskLogs", elemType: shared.ReplicationInstanceTaskLog })
  replicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];
}
