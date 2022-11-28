import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcDestinationSummary
/** 
 * The summary of a virtual private cloud (VPC) destination.
**/
export class VpcDestinationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
