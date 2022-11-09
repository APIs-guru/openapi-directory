import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
