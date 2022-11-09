import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestGridVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a project.
**/
export class TestGridVpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=subnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=vpcId" })
  vpcId: string;
}
