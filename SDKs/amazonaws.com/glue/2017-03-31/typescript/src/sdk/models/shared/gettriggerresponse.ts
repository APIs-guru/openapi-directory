import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";



export class GetTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Trigger" })
  trigger?: Trigger;
}
