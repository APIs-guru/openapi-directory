import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// NetworkInterfaceAttachment
/** 
 * Describes a network interface attachment.
**/
export class NetworkInterfaceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Date;

  @SpeakeasyMetadata()
  attachmentId?: string;

  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  deviceIndex?: number;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceOwnerId?: string;

  @SpeakeasyMetadata()
  networkCardIndex?: number;

  @SpeakeasyMetadata()
  status?: AttachmentStatusEnum;
}
