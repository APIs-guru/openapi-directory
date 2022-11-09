import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";
/**
 * Provides information that defines an Amazon Redshift endpoint.
**/
export declare class RedshiftSettings extends SpeakeasyBase {
    acceptAnyDate?: boolean;
    afterConnectScript?: string;
    bucketFolder?: string;
    bucketName?: string;
    caseSensitiveNames?: boolean;
    compUpdate?: boolean;
    connectionTimeout?: number;
    databaseName?: string;
    dateFormat?: string;
    emptyAsNull?: boolean;
    encryptionMode?: EncryptionModeValueEnum;
    explicitIds?: boolean;
    fileTransferUploadStreams?: number;
    loadTimeout?: number;
    maxFileSize?: number;
    password?: string;
    port?: number;
    removeQuotes?: boolean;
    replaceChars?: string;
    replaceInvalidChars?: string;
    secretsManagerAccessRoleArn?: string;
    secretsManagerSecretId?: string;
    serverName?: string;
    serverSideEncryptionKmsKeyId?: string;
    serviceAccessRoleArn?: string;
    timeFormat?: string;
    trimBlanks?: boolean;
    truncateColumns?: boolean;
    username?: string;
    writeBufferSize?: number;
}
