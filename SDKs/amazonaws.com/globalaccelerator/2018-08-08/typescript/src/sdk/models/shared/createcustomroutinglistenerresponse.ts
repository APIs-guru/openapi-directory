import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingListener } from "./customroutinglistener";



export class CreateCustomRoutingListenerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listener" })
  listener?: CustomRoutingListener;
}
