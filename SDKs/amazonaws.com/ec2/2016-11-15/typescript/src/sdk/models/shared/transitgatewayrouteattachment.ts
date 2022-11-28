import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";



// TransitGatewayRouteAttachment
/** 
 * Describes a route attachment.
**/
export class TransitGatewayRouteAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
