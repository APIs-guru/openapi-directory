import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IbmDb2Settings
/** 
 * Provides information that defines an IBM Db2 LUW endpoint.
**/
export class IbmDb2Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentLsn" })
  currentLsn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxKBytesPerRead" })
  maxKBytesPerRead?: number;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=SetDataCaptureChanges" })
  setDataCaptureChanges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
