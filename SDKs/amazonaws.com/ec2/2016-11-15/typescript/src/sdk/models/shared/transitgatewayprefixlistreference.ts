import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPrefixListReferenceStateEnum } from "./transitgatewayprefixlistreferencestateenum";
import { TransitGatewayPrefixListAttachment } from "./transitgatewayprefixlistattachment";



// TransitGatewayPrefixListReference
/** 
 * Describes a prefix list reference.
**/
export class TransitGatewayPrefixListReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blackhole?: boolean;

  @SpeakeasyMetadata()
  prefixListId?: string;

  @SpeakeasyMetadata()
  prefixListOwnerId?: string;

  @SpeakeasyMetadata()
  state?: TransitGatewayPrefixListReferenceStateEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachment?: TransitGatewayPrefixListAttachment;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}
