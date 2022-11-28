import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LocalGateway
/** 
 * Describes a local gateway.
**/
export class LocalGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
