import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides information that defines a SAP ASE endpoint.
**/
export declare class SybaseSettings extends SpeakeasyBase {
    databaseName?: string;
    password?: string;
    port?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    username?: string;
}
