import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharLengthSemanticsEnum } from "./charlengthsemanticsenum";


// OracleSettings
/** 
 * Provides information that defines an Oracle endpoint.
**/
export class OracleSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessAlternateDirectly" })
  accessAlternateDirectly?: boolean;

  @Metadata({ data: "json, name=AddSupplementalLogging" })
  addSupplementalLogging?: boolean;

  @Metadata({ data: "json, name=AdditionalArchivedLogDestId" })
  additionalArchivedLogDestId?: number;

  @Metadata({ data: "json, name=AllowSelectNestedTables" })
  allowSelectNestedTables?: boolean;

  @Metadata({ data: "json, name=ArchivedLogDestId" })
  archivedLogDestId?: number;

  @Metadata({ data: "json, name=ArchivedLogsOnly" })
  archivedLogsOnly?: boolean;

  @Metadata({ data: "json, name=AsmPassword" })
  asmPassword?: string;

  @Metadata({ data: "json, name=AsmServer" })
  asmServer?: string;

  @Metadata({ data: "json, name=AsmUser" })
  asmUser?: string;

  @Metadata({ data: "json, name=CharLengthSemantics" })
  charLengthSemantics?: CharLengthSemanticsEnum;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DirectPathNoLog" })
  directPathNoLog?: boolean;

  @Metadata({ data: "json, name=DirectPathParallelLoad" })
  directPathParallelLoad?: boolean;

  @Metadata({ data: "json, name=EnableHomogenousTablespace" })
  enableHomogenousTablespace?: boolean;

  @Metadata({ data: "json, name=ExtraArchivedLogDestIds" })
  extraArchivedLogDestIds?: number[];

  @Metadata({ data: "json, name=FailTasksOnLobTruncation" })
  failTasksOnLobTruncation?: boolean;

  @Metadata({ data: "json, name=NumberDatatypeScale" })
  numberDatatypeScale?: number;

  @Metadata({ data: "json, name=OraclePathPrefix" })
  oraclePathPrefix?: string;

  @Metadata({ data: "json, name=ParallelAsmReadThreads" })
  parallelAsmReadThreads?: number;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=ReadAheadBlocks" })
  readAheadBlocks?: number;

  @Metadata({ data: "json, name=ReadTableSpaceName" })
  readTableSpaceName?: boolean;

  @Metadata({ data: "json, name=ReplacePathPrefix" })
  replacePathPrefix?: boolean;

  @Metadata({ data: "json, name=RetryInterval" })
  retryInterval?: number;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerOracleAsmAccessRoleArn" })
  secretsManagerOracleAsmAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerOracleAsmSecretId" })
  secretsManagerOracleAsmSecretId?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=SecurityDbEncryption" })
  securityDbEncryption?: string;

  @Metadata({ data: "json, name=SecurityDbEncryptionName" })
  securityDbEncryptionName?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=SpatialDataOptionToGeoJsonFunctionName" })
  spatialDataOptionToGeoJsonFunctionName?: string;

  @Metadata({ data: "json, name=StandbyDelayTime" })
  standbyDelayTime?: number;

  @Metadata({ data: "json, name=UseAlternateFolderForOnline" })
  useAlternateFolderForOnline?: boolean;

  @Metadata({ data: "json, name=UseBFile" })
  useBFile?: boolean;

  @Metadata({ data: "json, name=UseDirectPathFullLoad" })
  useDirectPathFullLoad?: boolean;

  @Metadata({ data: "json, name=UseLogminerReader" })
  useLogminerReader?: boolean;

  @Metadata({ data: "json, name=UsePathPrefix" })
  usePathPrefix?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
