import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RdsHttpEndpointConfig
/** 
 * The Amazon RDS HTTP endpoint configuration.
**/
export class RdsHttpEndpointConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=awsSecretStoreArn" })
  awsSecretStoreArn?: string;

  @Metadata({ data: "json, name=databaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=dbClusterIdentifier" })
  dbClusterIdentifier?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}
