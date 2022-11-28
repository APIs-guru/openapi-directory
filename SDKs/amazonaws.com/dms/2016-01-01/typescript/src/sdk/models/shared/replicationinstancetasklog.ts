import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationInstanceTaskLog
/** 
 * Contains metadata for a replication instance task log.
**/
export class ReplicationInstanceTaskLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceTaskLogSize" })
  replicationInstanceTaskLogSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskName" })
  replicationTaskName?: string;
}
