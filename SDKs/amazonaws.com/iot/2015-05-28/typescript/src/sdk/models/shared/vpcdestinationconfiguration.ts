import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcDestinationConfiguration
/** 
 * The configuration information for a virtual private cloud (VPC) destination.
**/
export class VpcDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=securityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=subnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=vpcId" })
  vpcId: string;
}
