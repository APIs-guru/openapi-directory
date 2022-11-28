import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RdsHttpEndpointConfig
/** 
 * The Amazon RDS HTTP endpoint configuration.
**/
export class RdsHttpEndpointConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=awsSecretStoreArn" })
  awsSecretStoreArn?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=dbClusterIdentifier" })
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}
