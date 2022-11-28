import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LocalGatewayVirtualInterface
/** 
 * Describes a local gateway virtual interface.
**/
export class LocalGatewayVirtualInterface extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localAddress?: string;

  @SpeakeasyMetadata()
  localBgpAsn?: number;

  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  localGatewayVirtualInterfaceId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  peerAddress?: string;

  @SpeakeasyMetadata()
  peerBgpAsn?: number;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vlan?: number;
}
