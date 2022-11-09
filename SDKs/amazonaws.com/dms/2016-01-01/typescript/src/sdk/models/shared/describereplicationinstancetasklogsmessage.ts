import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeReplicationInstanceTaskLogsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
