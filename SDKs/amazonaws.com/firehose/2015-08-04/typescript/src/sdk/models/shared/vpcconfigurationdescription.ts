import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfigurationDescription
/** 
 * The details of the VPC of the Amazon ES destination.
**/
export class VpcConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
