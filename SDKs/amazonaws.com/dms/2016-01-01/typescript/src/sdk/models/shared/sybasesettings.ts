import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SybaseSettings
/** 
 * Provides information that defines a SAP ASE endpoint.
**/
export class SybaseSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
