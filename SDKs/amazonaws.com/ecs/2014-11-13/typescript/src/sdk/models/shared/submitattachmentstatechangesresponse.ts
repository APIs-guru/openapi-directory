import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitAttachmentStateChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgment" })
  acknowledgment?: string;
}
