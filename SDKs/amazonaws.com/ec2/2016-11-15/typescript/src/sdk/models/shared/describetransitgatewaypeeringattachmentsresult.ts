import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPeeringAttachment } from "./transitgatewaypeeringattachment";



export class DescribeTransitGatewayPeeringAttachmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayPeeringAttachment })
  transitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];
}
