import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitContainerStateChangeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgment" })
  acknowledgment?: string;
}
