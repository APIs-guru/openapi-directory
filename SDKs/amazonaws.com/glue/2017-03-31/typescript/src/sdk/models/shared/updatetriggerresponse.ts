import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trigger } from "./trigger";


export class UpdateTriggerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Trigger" })
  trigger?: Trigger;
}
