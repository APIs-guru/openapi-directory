import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
