import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayVpcAttachment } from "./transitgatewayvpcattachment";



export class DescribeTransitGatewayVpcAttachmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayVpcAttachment })
  transitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];
}
