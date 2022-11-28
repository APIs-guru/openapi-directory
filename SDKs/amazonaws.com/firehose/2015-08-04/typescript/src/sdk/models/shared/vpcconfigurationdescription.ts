import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfigurationDescription
/** 
 * The details of the VPC of the Amazon ES destination.
**/
export class VpcConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
