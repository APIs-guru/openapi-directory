import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfig
/** 
 * Information about the VPC configuration that CodeBuild accesses.
**/
export class VpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
