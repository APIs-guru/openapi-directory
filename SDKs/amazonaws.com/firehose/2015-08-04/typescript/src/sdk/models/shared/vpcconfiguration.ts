import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfiguration
/** 
 * The details of the VPC of the Amazon ES destination.
**/
export class VpcConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];
}
