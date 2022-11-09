import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SafeguardPolicyEnum } from "./safeguardpolicyenum";
/**
 * Provides information that defines a Microsoft SQL Server endpoint.
**/
export declare class MicrosoftSqlServerSettings extends SpeakeasyBase {
    bcpPacketSize?: number;
    controlTablesFileGroup?: string;
    databaseName?: string;
    password?: string;
    port?: number;
    querySingleAlwaysOnNode?: boolean;
    readBackupOnly?: boolean;
    safeguardPolicy?: SafeguardPolicyEnum;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    useBcpFullLoad?: boolean;
    useThirdPartyBackupDevice?: boolean;
    username?: string;
}
