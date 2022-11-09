import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTriggerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
