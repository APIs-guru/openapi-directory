import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryVpcSettings
/** 
 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
**/
export class DirectoryVpcSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
