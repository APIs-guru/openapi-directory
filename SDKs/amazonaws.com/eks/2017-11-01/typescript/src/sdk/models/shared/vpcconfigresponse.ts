import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConfigResponse
/** 
 * An object representing an Amazon EKS cluster VPC configuration response.
**/
export class VpcConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterSecurityGroupId" })
  clusterSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointPrivateAccess" })
  endpointPrivateAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpointPublicAccess" })
  endpointPublicAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publicAccessCidrs" })
  publicAccessCidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
