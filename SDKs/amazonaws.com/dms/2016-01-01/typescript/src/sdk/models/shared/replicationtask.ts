import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { ReplicationTaskStats } from "./replicationtaskstats";


// ReplicationTask
/** 
 * Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
**/
export class ReplicationTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @Metadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @Metadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @Metadata({ data: "json, name=MigrationType" })
  migrationType?: MigrationTypeValueEnum;

  @Metadata({ data: "json, name=RecoveryCheckpoint" })
  recoveryCheckpoint?: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskCreationDate" })
  replicationTaskCreationDate?: Date;

  @Metadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier?: string;

  @Metadata({ data: "json, name=ReplicationTaskSettings" })
  replicationTaskSettings?: string;

  @Metadata({ data: "json, name=ReplicationTaskStartDate" })
  replicationTaskStartDate?: Date;

  @Metadata({ data: "json, name=ReplicationTaskStats" })
  replicationTaskStats?: ReplicationTaskStats;

  @Metadata({ data: "json, name=SourceEndpointArn" })
  sourceEndpointArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StopReason" })
  stopReason?: string;

  @Metadata({ data: "json, name=TableMappings" })
  tableMappings?: string;

  @Metadata({ data: "json, name=TargetEndpointArn" })
  targetEndpointArn?: string;

  @Metadata({ data: "json, name=TargetReplicationInstanceArn" })
  targetReplicationInstanceArn?: string;

  @Metadata({ data: "json, name=TaskData" })
  taskData?: string;
}
