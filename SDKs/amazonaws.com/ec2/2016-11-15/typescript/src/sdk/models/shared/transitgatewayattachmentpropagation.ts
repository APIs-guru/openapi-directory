import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPropagationStateEnum } from "./transitgatewaypropagationstateenum";



// TransitGatewayAttachmentPropagation
/** 
 * Describes a propagation route table.
**/
export class TransitGatewayAttachmentPropagation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: TransitGatewayPropagationStateEnum;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}
