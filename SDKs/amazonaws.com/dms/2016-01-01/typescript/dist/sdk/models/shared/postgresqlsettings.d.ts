import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PluginNameValueEnum } from "./pluginnamevalueenum";
/**
 * Provides information that defines a PostgreSQL endpoint.
**/
export declare class PostgreSqlSettings extends SpeakeasyBase {
    afterConnectScript?: string;
    captureDdls?: boolean;
    databaseName?: string;
    ddlArtifactsSchema?: string;
    executeTimeout?: number;
    failTasksOnLobTruncation?: boolean;
    heartbeatEnable?: boolean;
    heartbeatFrequency?: number;
    heartbeatSchema?: string;
    maxFileSize?: number;
    password?: string;
    pluginName?: PluginNameValueEnum;
    port?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    slotName?: string;
    username?: string;
}
