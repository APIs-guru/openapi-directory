import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartTriggerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
