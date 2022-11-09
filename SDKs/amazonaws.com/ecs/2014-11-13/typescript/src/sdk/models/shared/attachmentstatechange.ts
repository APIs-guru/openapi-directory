import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachmentStateChange
/** 
 * An object representing a change in state for a task attachment.
**/
export class AttachmentStateChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentArn" })
  attachmentArn: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
