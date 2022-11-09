import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfig
/** 
 * Information about the VPC configuration that CodeBuild accesses.
**/
export class VpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
