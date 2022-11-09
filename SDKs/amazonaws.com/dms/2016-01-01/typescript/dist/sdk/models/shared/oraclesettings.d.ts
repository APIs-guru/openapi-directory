import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CharLengthSemanticsEnum } from "./charlengthsemanticsenum";
/**
 * Provides information that defines an Oracle endpoint.
**/
export declare class OracleSettings extends SpeakeasyBase {
    accessAlternateDirectly?: boolean;
    addSupplementalLogging?: boolean;
    additionalArchivedLogDestId?: number;
    allowSelectNestedTables?: boolean;
    archivedLogDestId?: number;
    archivedLogsOnly?: boolean;
    asmPassword?: string;
    asmServer?: string;
    asmUser?: string;
    charLengthSemantics?: CharLengthSemanticsEnum;
    databaseName?: string;
    directPathNoLog?: boolean;
    directPathParallelLoad?: boolean;
    enableHomogenousTablespace?: boolean;
    extraArchivedLogDestIds?: number[];
    failTasksOnLobTruncation?: boolean;
    numberDatatypeScale?: number;
    oraclePathPrefix?: string;
    parallelAsmReadThreads?: number;
    password?: string;
    port?: number;
    readAheadBlocks?: number;
    readTableSpaceName?: boolean;
    replacePathPrefix?: boolean;
    retryInterval?: number;
    secretsManagerAccessRoleArn?: string;
    secretsManagerOracleAsmAccessRoleArn?: string;
    secretsManagerOracleAsmSecretId?: string;
    secretsManagerSecretId?: string;
    securityDbEncryption?: string;
    securityDbEncryptionName?: string;
    serverName?: string;
    spatialDataOptionToGeoJsonFunctionName?: string;
    standbyDelayTime?: number;
    useAlternateFolderForOnline?: boolean;
    useBFile?: boolean;
    useDirectPathFullLoad?: boolean;
    useLogminerReader?: boolean;
    usePathPrefix?: string;
    username?: string;
}
