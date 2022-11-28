import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitContainerStateChangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgment" })
  acknowledgment?: string;
}
