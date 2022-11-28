import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayVpcAttachment } from "./transitgatewayvpcattachment";



export class CreateTransitGatewayVpcAttachmentResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
