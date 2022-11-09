import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
