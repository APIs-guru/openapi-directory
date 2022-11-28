import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingListener } from "./customroutinglistener";



export class ListCustomRoutingListenersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Listeners", elemType: CustomRoutingListener })
  listeners?: CustomRoutingListener[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
