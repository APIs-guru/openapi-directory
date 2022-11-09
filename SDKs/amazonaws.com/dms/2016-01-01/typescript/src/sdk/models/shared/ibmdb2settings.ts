import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IbmDb2Settings
/** 
 * Provides information that defines an IBM Db2 LUW endpoint.
**/
export class IbmDb2Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentLsn" })
  currentLsn?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=MaxKBytesPerRead" })
  maxKBytesPerRead?: number;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=SetDataCaptureChanges" })
  setDataCaptureChanges?: boolean;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
