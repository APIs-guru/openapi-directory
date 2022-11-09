import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TriggerUpdate } from "./triggerupdate";


export class UpdateTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=TriggerUpdate" })
  triggerUpdate: TriggerUpdate;
}
