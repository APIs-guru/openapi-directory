import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { Tag } from "./tag";



// CreateReplicationTaskMessage
/** 
 * <p/>
**/
export class CreateReplicationTaskMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=CdcStartTime" })
  cdcStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=MigrationType" })
  migrationType: MigrationTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskSettings" })
  replicationTaskSettings?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceEndpointArn" })
  sourceEndpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=TableMappings" })
  tableMappings: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetEndpointArn" })
  targetEndpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=TaskData" })
  taskData?: string;
}
