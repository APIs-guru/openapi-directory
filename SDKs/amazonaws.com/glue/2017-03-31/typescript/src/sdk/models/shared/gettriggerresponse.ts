import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trigger } from "./trigger";


export class GetTriggerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Trigger" })
  trigger?: Trigger;
}
