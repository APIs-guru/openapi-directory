import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// InternetGatewayAttachment
/** 
 * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
**/
export class InternetGatewayAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: AttachmentStatusEnum;

  @SpeakeasyMetadata()
  vpcId?: string;
}
