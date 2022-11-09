import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitAttachmentStateChangesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgment" })
  acknowledgment?: string;
}
