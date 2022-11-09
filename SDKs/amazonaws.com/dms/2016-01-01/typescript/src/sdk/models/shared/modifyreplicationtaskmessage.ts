import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";


// ModifyReplicationTaskMessage
/** 
 * <p/>
**/
export class ModifyReplicationTaskMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @Metadata({ data: "json, name=CdcStartTime" })
  cdcStartTime?: Date;

  @Metadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @Metadata({ data: "json, name=MigrationType" })
  migrationType?: MigrationTypeValueEnum;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @Metadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier?: string;

  @Metadata({ data: "json, name=ReplicationTaskSettings" })
  replicationTaskSettings?: string;

  @Metadata({ data: "json, name=TableMappings" })
  tableMappings?: string;

  @Metadata({ data: "json, name=TaskData" })
  taskData?: string;
}
