import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";


// RedshiftSettings
/** 
 * Provides information that defines an Amazon Redshift endpoint.
**/
export class RedshiftSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptAnyDate" })
  acceptAnyDate?: boolean;

  @Metadata({ data: "json, name=AfterConnectScript" })
  afterConnectScript?: string;

  @Metadata({ data: "json, name=BucketFolder" })
  bucketFolder?: string;

  @Metadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=CaseSensitiveNames" })
  caseSensitiveNames?: boolean;

  @Metadata({ data: "json, name=CompUpdate" })
  compUpdate?: boolean;

  @Metadata({ data: "json, name=ConnectionTimeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DateFormat" })
  dateFormat?: string;

  @Metadata({ data: "json, name=EmptyAsNull" })
  emptyAsNull?: boolean;

  @Metadata({ data: "json, name=EncryptionMode" })
  encryptionMode?: EncryptionModeValueEnum;

  @Metadata({ data: "json, name=ExplicitIds" })
  explicitIds?: boolean;

  @Metadata({ data: "json, name=FileTransferUploadStreams" })
  fileTransferUploadStreams?: number;

  @Metadata({ data: "json, name=LoadTimeout" })
  loadTimeout?: number;

  @Metadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=RemoveQuotes" })
  removeQuotes?: boolean;

  @Metadata({ data: "json, name=ReplaceChars" })
  replaceChars?: string;

  @Metadata({ data: "json, name=ReplaceInvalidChars" })
  replaceInvalidChars?: string;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=ServerSideEncryptionKmsKeyId" })
  serverSideEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @Metadata({ data: "json, name=TimeFormat" })
  timeFormat?: string;

  @Metadata({ data: "json, name=TrimBlanks" })
  trimBlanks?: boolean;

  @Metadata({ data: "json, name=TruncateColumns" })
  truncateColumns?: boolean;

  @Metadata({ data: "json, name=Username" })
  username?: string;

  @Metadata({ data: "json, name=WriteBufferSize" })
  writeBufferSize?: number;
}
