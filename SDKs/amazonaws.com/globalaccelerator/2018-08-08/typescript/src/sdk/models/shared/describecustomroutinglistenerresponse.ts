import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingListener } from "./customroutinglistener";



export class DescribeCustomRoutingListenerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listener" })
  listener?: CustomRoutingListener;
}
