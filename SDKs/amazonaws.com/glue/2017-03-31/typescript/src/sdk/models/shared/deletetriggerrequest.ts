import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
