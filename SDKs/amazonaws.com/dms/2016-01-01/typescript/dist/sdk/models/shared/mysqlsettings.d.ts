import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDbTypeEnum } from "./targetdbtypeenum";
/**
 * Provides information that defines a MySQL endpoint.
**/
export declare class MySqlSettings extends SpeakeasyBase {
    afterConnectScript?: string;
    cleanSourceMetadataOnMismatch?: boolean;
    databaseName?: string;
    eventsPollInterval?: number;
    maxFileSize?: number;
    parallelLoadThreads?: number;
    password?: string;
    port?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    serverTimezone?: string;
    targetDbType?: TargetDbTypeEnum;
    username?: string;
}
