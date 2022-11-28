import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetDbTypeEnum } from "./targetdbtypeenum";



// MySqlSettings
/** 
 * Provides information that defines a MySQL endpoint.
**/
export class MySqlSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AfterConnectScript" })
  afterConnectScript?: string;

  @SpeakeasyMetadata({ data: "json, name=CleanSourceMetadataOnMismatch" })
  cleanSourceMetadataOnMismatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=EventsPollInterval" })
  eventsPollInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ParallelLoadThreads" })
  parallelLoadThreads?: number;

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

  @SpeakeasyMetadata({ data: "json, name=ServerTimezone" })
  serverTimezone?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetDbType" })
  targetDbType?: TargetDbTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
