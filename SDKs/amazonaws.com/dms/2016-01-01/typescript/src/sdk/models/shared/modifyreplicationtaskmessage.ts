import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";



// ModifyReplicationTaskMessage
/** 
 * <p/>
**/
export class ModifyReplicationTaskMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=CdcStartTime" })
  cdcStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=MigrationType" })
  migrationType?: MigrationTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskSettings" })
  replicationTaskSettings?: string;

  @SpeakeasyMetadata({ data: "json, name=TableMappings" })
  tableMappings?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskData" })
  taskData?: string;
}
