import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { Tag } from "./tag";
/**
 * <p/>
**/
export declare class CreateReplicationTaskMessage extends SpeakeasyBase {
    cdcStartPosition?: string;
    cdcStartTime?: Date;
    cdcStopPosition?: string;
    migrationType: MigrationTypeValueEnum;
    replicationInstanceArn: string;
    replicationTaskIdentifier: string;
    replicationTaskSettings?: string;
    resourceIdentifier?: string;
    sourceEndpointArn: string;
    tableMappings: string;
    tags?: Tag[];
    targetEndpointArn: string;
    taskData?: string;
}
