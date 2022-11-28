import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PluginNameValueEnum } from "./pluginnamevalueenum";



// PostgreSqlSettings
/** 
 * Provides information that defines a PostgreSQL endpoint.
**/
export class PostgreSqlSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AfterConnectScript" })
  afterConnectScript?: string;

  @SpeakeasyMetadata({ data: "json, name=CaptureDdls" })
  captureDdls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DdlArtifactsSchema" })
  ddlArtifactsSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecuteTimeout" })
  executeTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=FailTasksOnLobTruncation" })
  failTasksOnLobTruncation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HeartbeatEnable" })
  heartbeatEnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HeartbeatFrequency" })
  heartbeatFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=HeartbeatSchema" })
  heartbeatSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=PluginName" })
  pluginName?: PluginNameValueEnum;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=SlotName" })
  slotName?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
