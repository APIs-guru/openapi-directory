import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationInstanceTaskLog
/** 
 * Contains metadata for a replication instance task log.
**/
export class ReplicationInstanceTaskLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationInstanceTaskLogSize" })
  replicationInstanceTaskLogSize?: number;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskName" })
  replicationTaskName?: string;
}
