import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomRoutingListener } from "./customroutinglistener";


export class UpdateCustomRoutingListenerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Listener" })
  listener?: CustomRoutingListener;
}
