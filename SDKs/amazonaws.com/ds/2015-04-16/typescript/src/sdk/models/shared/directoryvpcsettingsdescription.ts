import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryVpcSettingsDescription
/** 
 * Contains information about the directory.
**/
export class DirectoryVpcSettingsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupId" })
  securityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
