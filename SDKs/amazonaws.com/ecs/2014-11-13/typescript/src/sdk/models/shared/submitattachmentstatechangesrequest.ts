import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentStateChange } from "./attachmentstatechange";


export class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.AttachmentStateChange })
  attachments: AttachmentStateChange[];

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;
}
