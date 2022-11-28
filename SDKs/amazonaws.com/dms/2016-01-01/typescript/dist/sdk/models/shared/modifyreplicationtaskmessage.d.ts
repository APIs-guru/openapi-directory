import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
/**
 * <p/>
**/
export declare class ModifyReplicationTaskMessage extends SpeakeasyBase {
    cdcStartPosition?: string;
    cdcStartTime?: Date;
    cdcStopPosition?: string;
    migrationType?: MigrationTypeValueEnum;
    replicationTaskArn: string;
    replicationTaskIdentifier?: string;
    replicationTaskSettings?: string;
    tableMappings?: string;
    taskData?: string;
}
