import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SafeguardPolicyEnum } from "./safeguardpolicyenum";



// MicrosoftSqlServerSettings
/** 
 * Provides information that defines a Microsoft SQL Server endpoint.
**/
export class MicrosoftSqlServerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BcpPacketSize" })
  bcpPacketSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ControlTablesFileGroup" })
  controlTablesFileGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=QuerySingleAlwaysOnNode" })
  querySingleAlwaysOnNode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReadBackupOnly" })
  readBackupOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SafeguardPolicy" })
  safeguardPolicy?: SafeguardPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=UseBcpFullLoad" })
  useBcpFullLoad?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseThirdPartyBackupDevice" })
  useThirdPartyBackupDevice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
