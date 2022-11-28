import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryConnectSettingsDescription
/** 
 * Contains information about an AD Connector directory.
**/
export class DirectoryConnectSettingsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=ConnectIps" })
  connectIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=CustomerUserName" })
  customerUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupId" })
  securityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
