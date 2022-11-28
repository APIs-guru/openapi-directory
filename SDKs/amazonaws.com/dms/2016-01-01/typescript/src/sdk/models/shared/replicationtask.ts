import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { ReplicationTaskStats } from "./replicationtaskstats";



// ReplicationTask
/** 
 * Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
**/
export class ReplicationTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=MigrationType" })
  migrationType?: MigrationTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=RecoveryCheckpoint" })
  recoveryCheckpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskCreationDate" })
  replicationTaskCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskSettings" })
  replicationTaskSettings?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskStartDate" })
  replicationTaskStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskStats" })
  replicationTaskStats?: ReplicationTaskStats;

  @SpeakeasyMetadata({ data: "json, name=SourceEndpointArn" })
  sourceEndpointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StopReason" })
  stopReason?: string;

  @SpeakeasyMetadata({ data: "json, name=TableMappings" })
  tableMappings?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetEndpointArn" })
  targetEndpointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetReplicationInstanceArn" })
  targetReplicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskData" })
  taskData?: string;
}
