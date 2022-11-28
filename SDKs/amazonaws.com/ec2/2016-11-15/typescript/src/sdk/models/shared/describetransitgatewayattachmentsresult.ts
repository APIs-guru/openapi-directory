import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachment } from "./transitgatewayattachment";



export class DescribeTransitGatewayAttachmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayAttachment })
  transitGatewayAttachments?: TransitGatewayAttachment[];
}
