import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcDestinationConfiguration
/** 
 * The configuration information for a virtual private cloud (VPC) destination.
**/
export class VpcDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId: string;
}
