import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { ReplicationTaskStats } from "./replicationtaskstats";
/**
 * Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
**/
export declare class ReplicationTask extends SpeakeasyBase {
    cdcStartPosition?: string;
    cdcStopPosition?: string;
    lastFailureMessage?: string;
    migrationType?: MigrationTypeValueEnum;
    recoveryCheckpoint?: string;
    replicationInstanceArn?: string;
    replicationTaskArn?: string;
    replicationTaskCreationDate?: Date;
    replicationTaskIdentifier?: string;
    replicationTaskSettings?: string;
    replicationTaskStartDate?: Date;
    replicationTaskStats?: ReplicationTaskStats;
    sourceEndpointArn?: string;
    status?: string;
    stopReason?: string;
    tableMappings?: string;
    targetEndpointArn?: string;
    targetReplicationInstanceArn?: string;
    taskData?: string;
}
