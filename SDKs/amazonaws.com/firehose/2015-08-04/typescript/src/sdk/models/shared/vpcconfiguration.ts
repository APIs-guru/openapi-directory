import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfiguration
/** 
 * The details of the VPC of the Amazon ES destination.
**/
export class VpcConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
