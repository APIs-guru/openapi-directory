import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// EbsInstanceBlockDevice
/** 
 * Describes a parameter used to set up an EBS volume in a block device mapping.
**/
export class EbsInstanceBlockDevice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Date;

  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  status?: AttachmentStatusEnum;

  @SpeakeasyMetadata()
  volumeId?: string;
}
