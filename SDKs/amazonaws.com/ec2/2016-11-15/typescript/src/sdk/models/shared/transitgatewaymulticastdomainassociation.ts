import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { SubnetAssociation } from "./subnetassociation";



// TransitGatewayMulticastDomainAssociation
/** 
 * Describes the resources associated with the transit gateway multicast domain.
**/
export class TransitGatewayMulticastDomainAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceOwnerId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  subnet?: SubnetAssociation;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
