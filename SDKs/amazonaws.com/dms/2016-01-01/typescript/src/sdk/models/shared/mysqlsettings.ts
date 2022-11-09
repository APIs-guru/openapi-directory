import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetDbTypeEnum } from "./targetdbtypeenum";


// MySqlSettings
/** 
 * Provides information that defines a MySQL endpoint.
**/
export class MySqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AfterConnectScript" })
  afterConnectScript?: string;

  @Metadata({ data: "json, name=CleanSourceMetadataOnMismatch" })
  cleanSourceMetadataOnMismatch?: boolean;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=EventsPollInterval" })
  eventsPollInterval?: number;

  @Metadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @Metadata({ data: "json, name=ParallelLoadThreads" })
  parallelLoadThreads?: number;

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

  @Metadata({ data: "json, name=ServerTimezone" })
  serverTimezone?: string;

  @Metadata({ data: "json, name=TargetDbType" })
  targetDbType?: TargetDbTypeEnum;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
