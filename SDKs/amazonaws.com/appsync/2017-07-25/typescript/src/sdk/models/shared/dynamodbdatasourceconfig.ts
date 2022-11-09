import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeltaSyncConfig } from "./deltasyncconfig";


// DynamodbDataSourceConfig
/** 
 * Describes an Amazon DynamoDB data source configuration.
**/
export class DynamodbDataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=deltaSyncConfig" })
  deltaSyncConfig?: DeltaSyncConfig;

  @Metadata({ data: "json, name=tableName" })
  tableName: string;

  @Metadata({ data: "json, name=useCallerCredentials" })
  useCallerCredentials?: boolean;

  @Metadata({ data: "json, name=versioned" })
  versioned?: boolean;
}
