import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTriggerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
