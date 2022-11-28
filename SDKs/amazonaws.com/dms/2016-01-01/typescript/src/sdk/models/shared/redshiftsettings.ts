import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionModeValueEnum } from "./encryptionmodevalueenum";



// RedshiftSettings
/** 
 * Provides information that defines an Amazon Redshift endpoint.
**/
export class RedshiftSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptAnyDate" })
  acceptAnyDate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AfterConnectScript" })
  afterConnectScript?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketFolder" })
  bucketFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=CaseSensitiveNames" })
  caseSensitiveNames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CompUpdate" })
  compUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConnectionTimeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DateFormat" })
  dateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=EmptyAsNull" })
  emptyAsNull?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EncryptionMode" })
  encryptionMode?: EncryptionModeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=ExplicitIds" })
  explicitIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FileTransferUploadStreams" })
  fileTransferUploadStreams?: number;

  @SpeakeasyMetadata({ data: "json, name=LoadTimeout" })
  loadTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=RemoveQuotes" })
  removeQuotes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReplaceChars" })
  replaceChars?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplaceInvalidChars" })
  replaceInvalidChars?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideEncryptionKmsKeyId" })
  serverSideEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeFormat" })
  timeFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=TrimBlanks" })
  trimBlanks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TruncateColumns" })
  truncateColumns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=WriteBufferSize" })
  writeBufferSize?: number;
}
