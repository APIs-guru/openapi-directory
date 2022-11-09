import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SafeguardPolicyEnum } from "./safeguardpolicyenum";


// MicrosoftSqlServerSettings
/** 
 * Provides information that defines a Microsoft SQL Server endpoint.
**/
export class MicrosoftSqlServerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=BcpPacketSize" })
  bcpPacketSize?: number;

  @Metadata({ data: "json, name=ControlTablesFileGroup" })
  controlTablesFileGroup?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=QuerySingleAlwaysOnNode" })
  querySingleAlwaysOnNode?: boolean;

  @Metadata({ data: "json, name=ReadBackupOnly" })
  readBackupOnly?: boolean;

  @Metadata({ data: "json, name=SafeguardPolicy" })
  safeguardPolicy?: SafeguardPolicyEnum;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=UseBcpFullLoad" })
  useBcpFullLoad?: boolean;

  @Metadata({ data: "json, name=UseThirdPartyBackupDevice" })
  useThirdPartyBackupDevice?: boolean;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
