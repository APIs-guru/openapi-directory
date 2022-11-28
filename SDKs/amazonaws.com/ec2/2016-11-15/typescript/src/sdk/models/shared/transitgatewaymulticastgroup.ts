import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipTypeEnum } from "./membershiptypeenum";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";



// TransitGatewayMulticastGroup
/** 
 * Describes the transit gateway multicast group resources.
**/
export class TransitGatewayMulticastGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupIpAddress?: string;

  @SpeakeasyMetadata()
  groupMember?: boolean;

  @SpeakeasyMetadata()
  groupSource?: boolean;

  @SpeakeasyMetadata()
  memberType?: MembershipTypeEnum;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceOwnerId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  sourceType?: MembershipTypeEnum;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
