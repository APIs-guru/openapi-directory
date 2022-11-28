import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeltaSyncConfig } from "./deltasyncconfig";



// DynamodbDataSourceConfig
/** 
 * Describes an Amazon DynamoDB data source configuration.
**/
export class DynamodbDataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=deltaSyncConfig" })
  deltaSyncConfig?: DeltaSyncConfig;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=useCallerCredentials" })
  useCallerCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versioned" })
  versioned?: boolean;
}
