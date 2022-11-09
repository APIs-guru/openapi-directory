import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConfigResponse
/** 
 * An object representing an Amazon EKS cluster VPC configuration response.
**/
export class VpcConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterSecurityGroupId" })
  clusterSecurityGroupId?: string;

  @Metadata({ data: "json, name=endpointPrivateAccess" })
  endpointPrivateAccess?: boolean;

  @Metadata({ data: "json, name=endpointPublicAccess" })
  endpointPublicAccess?: boolean;

  @Metadata({ data: "json, name=publicAccessCidrs" })
  publicAccessCidrs?: string[];

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
