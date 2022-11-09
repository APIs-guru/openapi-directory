import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfig
/** 
 *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. 
**/
export class VpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=Subnets" })
  subnets: string[];
}
