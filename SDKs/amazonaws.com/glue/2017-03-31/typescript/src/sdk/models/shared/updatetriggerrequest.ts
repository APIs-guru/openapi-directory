import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TriggerUpdate } from "./triggerupdate";



export class UpdateTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=TriggerUpdate" })
  triggerUpdate: TriggerUpdate;
}
