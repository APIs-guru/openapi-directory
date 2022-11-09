import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { Tag } from "./tag";


// CreateReplicationTaskMessage
/** 
 * <p/>
**/
export class CreateReplicationTaskMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @Metadata({ data: "json, name=CdcStartTime" })
  cdcStartTime?: Date;

  @Metadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @Metadata({ data: "json, name=MigrationType" })
  migrationType: MigrationTypeValueEnum;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;

  @Metadata({ data: "json, name=ReplicationTaskIdentifier" })
  replicationTaskIdentifier: string;

  @Metadata({ data: "json, name=ReplicationTaskSettings" })
  replicationTaskSettings?: string;

  @Metadata({ data: "json, name=ResourceIdentifier" })
  resourceIdentifier?: string;

  @Metadata({ data: "json, name=SourceEndpointArn" })
  sourceEndpointArn: string;

  @Metadata({ data: "json, name=TableMappings" })
  tableMappings: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetEndpointArn" })
  targetEndpointArn: string;

  @Metadata({ data: "json, name=TaskData" })
  taskData?: string;
}
