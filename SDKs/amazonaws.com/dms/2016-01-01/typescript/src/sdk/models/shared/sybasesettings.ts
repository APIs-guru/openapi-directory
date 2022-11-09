import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SybaseSettings
/** 
 * Provides information that defines a SAP ASE endpoint.
**/
export class SybaseSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
