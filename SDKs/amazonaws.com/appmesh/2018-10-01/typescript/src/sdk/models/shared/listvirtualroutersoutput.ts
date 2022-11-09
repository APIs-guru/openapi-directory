import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualRouterRef } from "./virtualrouterref";


export class ListVirtualRoutersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualRouters", elemType: shared.VirtualRouterRef })
  virtualRouters: VirtualRouterRef[];
}
