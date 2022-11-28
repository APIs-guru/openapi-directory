import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { SubnetAssociation } from "./subnetassociation";



// TransitGatewayMulticastDomainAssociations
/** 
 * Describes the multicast domain associations.
**/
export class TransitGatewayMulticastDomainAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceOwnerId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata({ elemType: SubnetAssociation })
  subnets?: SubnetAssociation[];

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: string;
}
