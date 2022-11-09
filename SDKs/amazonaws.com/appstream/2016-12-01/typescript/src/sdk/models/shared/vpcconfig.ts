import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfig
/** 
 * Describes VPC configuration information for fleets and image builders.
**/
export class VpcConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
