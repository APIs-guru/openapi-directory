import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStateChange } from "./attachmentstatechange";



export class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AttachmentStateChange })
  attachments: AttachmentStateChange[];

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;
}
