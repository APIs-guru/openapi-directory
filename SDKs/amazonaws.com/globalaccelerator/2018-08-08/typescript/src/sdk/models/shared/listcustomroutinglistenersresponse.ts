import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRoutingListener } from "./customroutinglistener";


export class ListCustomRoutingListenersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Listeners", elemType: shared.CustomRoutingListener })
  listeners?: CustomRoutingListener[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
