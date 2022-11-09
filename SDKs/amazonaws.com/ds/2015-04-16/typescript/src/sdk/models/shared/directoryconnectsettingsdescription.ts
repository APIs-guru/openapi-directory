import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryConnectSettingsDescription
/** 
 * Contains information about an AD Connector directory.
**/
export class DirectoryConnectSettingsDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=ConnectIps" })
  connectIps?: string[];

  @Metadata({ data: "json, name=CustomerUserName" })
  customerUserName?: string;

  @Metadata({ data: "json, name=SecurityGroupId" })
  securityGroupId?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
