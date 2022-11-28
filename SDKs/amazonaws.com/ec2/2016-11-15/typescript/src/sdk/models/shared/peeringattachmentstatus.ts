import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PeeringAttachmentStatus
/** 
 * The status of the transit gateway peering attachment.
**/
export class PeeringAttachmentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
