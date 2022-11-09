import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PluginNameValueEnum } from "./pluginnamevalueenum";


// PostgreSqlSettings
/** 
 * Provides information that defines a PostgreSQL endpoint.
**/
export class PostgreSqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AfterConnectScript" })
  afterConnectScript?: string;

  @Metadata({ data: "json, name=CaptureDdls" })
  captureDdls?: boolean;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DdlArtifactsSchema" })
  ddlArtifactsSchema?: string;

  @Metadata({ data: "json, name=ExecuteTimeout" })
  executeTimeout?: number;

  @Metadata({ data: "json, name=FailTasksOnLobTruncation" })
  failTasksOnLobTruncation?: boolean;

  @Metadata({ data: "json, name=HeartbeatEnable" })
  heartbeatEnable?: boolean;

  @Metadata({ data: "json, name=HeartbeatFrequency" })
  heartbeatFrequency?: number;

  @Metadata({ data: "json, name=HeartbeatSchema" })
  heartbeatSchema?: string;

  @Metadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=PluginName" })
  pluginName?: PluginNameValueEnum;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=SlotName" })
  slotName?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
