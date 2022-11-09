import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectoryVpcSettings
/** 
 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
**/
export class DirectoryVpcSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
