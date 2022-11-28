import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestGridVpcConfig
/** 
 * The VPC security groups and subnets that are attached to a project.
**/
export class TestGridVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId: string;
}
