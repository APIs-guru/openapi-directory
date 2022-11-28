import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentPropagation } from "./transitgatewayattachmentpropagation";



export class GetTransitGatewayAttachmentPropagationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayAttachmentPropagation })
  transitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];
}
