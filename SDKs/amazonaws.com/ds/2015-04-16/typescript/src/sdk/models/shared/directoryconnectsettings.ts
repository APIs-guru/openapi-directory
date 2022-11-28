import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryConnectSettings
/** 
 * Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
**/
export class DirectoryConnectSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerDnsIps" })
  customerDnsIps: string[];

  @SpeakeasyMetadata({ data: "json, name=CustomerUserName" })
  customerUserName: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
