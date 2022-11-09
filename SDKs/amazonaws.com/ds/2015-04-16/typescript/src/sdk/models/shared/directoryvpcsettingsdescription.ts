import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryVpcSettingsDescription
/** 
 * Contains information about the directory.
**/
export class DirectoryVpcSettingsDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=SecurityGroupId" })
  securityGroupId?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
