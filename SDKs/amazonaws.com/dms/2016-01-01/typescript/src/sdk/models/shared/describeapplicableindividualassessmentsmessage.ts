import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";



// DescribeApplicableIndividualAssessmentsMessage
/** 
 * <p/>
**/
export class DescribeApplicableIndividualAssessmentsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=MigrationType" })
  migrationType?: MigrationTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceEngineName" })
  sourceEngineName?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetEngineName" })
  targetEngineName?: string;
}
