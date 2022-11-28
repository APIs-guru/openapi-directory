import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfig
/** 
 *  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. 
**/
export class VpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Subnets" })
  subnets: string[];
}
