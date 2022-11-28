import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// VpcAttachment
/** 
 * Describes an attachment between a virtual private gateway and a VPC.
**/
export class VpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: AttachmentStatusEnum;

  @SpeakeasyMetadata()
  vpcId?: string;
}
