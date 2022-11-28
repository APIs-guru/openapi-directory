import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfig
/** 
 * Describes VPC configuration information for fleets and image builders.
**/
export class VpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
