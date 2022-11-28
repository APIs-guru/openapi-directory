import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information that defines an IBM Db2 LUW endpoint.
**/
export declare class IbmDb2Settings extends SpeakeasyBase {
    currentLsn?: string;
    databaseName?: string;
    maxKBytesPerRead?: number;
    password?: string;
    port?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    setDataCaptureChanges?: boolean;
    username?: string;
}
