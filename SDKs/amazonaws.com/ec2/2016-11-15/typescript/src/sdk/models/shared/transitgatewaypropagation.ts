import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayPropagationStateEnum } from "./transitgatewaypropagationstateenum";



// TransitGatewayPropagation
/** 
 * Describes route propagation.
**/
export class TransitGatewayPropagation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  state?: TransitGatewayPropagationStateEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}
