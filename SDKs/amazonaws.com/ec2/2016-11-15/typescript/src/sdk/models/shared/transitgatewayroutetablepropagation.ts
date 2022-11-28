import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayPropagationStateEnum } from "./transitgatewaypropagationstateenum";



// TransitGatewayRouteTablePropagation
/** 
 * Describes a route table propagation.
**/
export class TransitGatewayRouteTablePropagation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  state?: TransitGatewayPropagationStateEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
