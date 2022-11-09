import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryConnectSettings
/** 
 * Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
**/
export class DirectoryConnectSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerDnsIps" })
  customerDnsIps: string[];

  @Metadata({ data: "json, name=CustomerUserName" })
  customerUserName: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
