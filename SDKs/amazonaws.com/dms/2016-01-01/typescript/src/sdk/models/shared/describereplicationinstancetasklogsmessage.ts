import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeReplicationInstanceTaskLogsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
