import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";



// TransitGatewayPrefixListAttachment
/** 
 * Describes a transit gateway prefix list attachment.
**/
export class TransitGatewayPrefixListAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
