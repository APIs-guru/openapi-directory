import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterRef } from "./virtualrouterref";



// ListVirtualRoutersOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListVirtualRoutersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualRouters", elemType: VirtualRouterRef })
  virtualRouters: VirtualRouterRef[];
}
