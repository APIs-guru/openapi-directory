import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachmentStateChange
/** 
 * An object representing a change in state for a task attachment.
**/
export class AttachmentStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentArn" })
  attachmentArn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
