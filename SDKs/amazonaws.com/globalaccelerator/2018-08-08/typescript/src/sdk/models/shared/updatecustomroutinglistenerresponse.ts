import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingListener } from "./customroutinglistener";



export class UpdateCustomRoutingListenerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listener" })
  listener?: CustomRoutingListener;
}
