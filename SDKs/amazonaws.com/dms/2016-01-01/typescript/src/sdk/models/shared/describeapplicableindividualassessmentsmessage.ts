import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";


// DescribeApplicableIndividualAssessmentsMessage
/** 
 * <p/>
**/
export class DescribeApplicableIndividualAssessmentsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "json, name=MigrationType" })
  migrationType?: MigrationTypeValueEnum;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @Metadata({ data: "json, name=SourceEngineName" })
  sourceEngineName?: string;

  @Metadata({ data: "json, name=TargetEngineName" })
  targetEngineName?: string;
}
