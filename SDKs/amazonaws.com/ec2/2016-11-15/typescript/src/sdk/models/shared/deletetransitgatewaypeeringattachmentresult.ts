import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPeeringAttachment } from "./transitgatewaypeeringattachment";



export class DeleteTransitGatewayPeeringAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
