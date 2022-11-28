import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharLengthSemanticsEnum } from "./charlengthsemanticsenum";



// OracleSettings
/** 
 * Provides information that defines an Oracle endpoint.
**/
export class OracleSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessAlternateDirectly" })
  accessAlternateDirectly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AddSupplementalLogging" })
  addSupplementalLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AdditionalArchivedLogDestId" })
  additionalArchivedLogDestId?: number;

  @SpeakeasyMetadata({ data: "json, name=AllowSelectNestedTables" })
  allowSelectNestedTables?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ArchivedLogDestId" })
  archivedLogDestId?: number;

  @SpeakeasyMetadata({ data: "json, name=ArchivedLogsOnly" })
  archivedLogsOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AsmPassword" })
  asmPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=AsmServer" })
  asmServer?: string;

  @SpeakeasyMetadata({ data: "json, name=AsmUser" })
  asmUser?: string;

  @SpeakeasyMetadata({ data: "json, name=CharLengthSemantics" })
  charLengthSemantics?: CharLengthSemanticsEnum;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectPathNoLog" })
  directPathNoLog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DirectPathParallelLoad" })
  directPathParallelLoad?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableHomogenousTablespace" })
  enableHomogenousTablespace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExtraArchivedLogDestIds" })
  extraArchivedLogDestIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=FailTasksOnLobTruncation" })
  failTasksOnLobTruncation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NumberDatatypeScale" })
  numberDatatypeScale?: number;

  @SpeakeasyMetadata({ data: "json, name=OraclePathPrefix" })
  oraclePathPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=ParallelAsmReadThreads" })
  parallelAsmReadThreads?: number;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadAheadBlocks" })
  readAheadBlocks?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadTableSpaceName" })
  readTableSpaceName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReplacePathPrefix" })
  replacePathPrefix?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RetryInterval" })
  retryInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerOracleAsmAccessRoleArn" })
  secretsManagerOracleAsmAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerOracleAsmSecretId" })
  secretsManagerOracleAsmSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityDbEncryption" })
  securityDbEncryption?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityDbEncryptionName" })
  securityDbEncryptionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=SpatialDataOptionToGeoJsonFunctionName" })
  spatialDataOptionToGeoJsonFunctionName?: string;

  @SpeakeasyMetadata({ data: "json, name=StandbyDelayTime" })
  standbyDelayTime?: number;

  @SpeakeasyMetadata({ data: "json, name=UseAlternateFolderForOnline" })
  useAlternateFolderForOnline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseBFile" })
  useBFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseDirectPathFullLoad" })
  useDirectPathFullLoad?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseLogminerReader" })
  useLogminerReader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UsePathPrefix" })
  usePathPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
