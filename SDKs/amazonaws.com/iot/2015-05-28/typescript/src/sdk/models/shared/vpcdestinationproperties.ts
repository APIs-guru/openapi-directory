import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcDestinationProperties
/** 
 * The properties of a virtual private cloud (VPC) destination.
**/
export class VpcDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
