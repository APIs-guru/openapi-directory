import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitTaskStateChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgment" })
  acknowledgment?: string;
}
