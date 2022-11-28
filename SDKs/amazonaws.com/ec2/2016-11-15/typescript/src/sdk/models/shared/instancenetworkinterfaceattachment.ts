import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// InstanceNetworkInterfaceAttachment
/** 
 * Describes a network interface attachment.
**/
export class InstanceNetworkInterfaceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Date;

  @SpeakeasyMetadata()
  attachmentId?: string;

  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  deviceIndex?: number;

  @SpeakeasyMetadata()
  networkCardIndex?: number;

  @SpeakeasyMetadata()
  status?: AttachmentStatusEnum;
}
