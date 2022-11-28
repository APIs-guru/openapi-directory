import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LocalGatewayVirtualInterfaceGroup
/** 
 * Describes a local gateway virtual interface group.
**/
export class LocalGatewayVirtualInterfaceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  localGatewayVirtualInterfaceGroupId?: string;

  @SpeakeasyMetadata()
  localGatewayVirtualInterfaceIds?: string[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
