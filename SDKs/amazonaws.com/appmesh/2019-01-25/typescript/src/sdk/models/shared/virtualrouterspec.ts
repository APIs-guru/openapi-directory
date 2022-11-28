import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterListener } from "./virtualrouterlistener";



// VirtualRouterSpec
/** 
 * An object that represents the specification of a virtual router.
**/
export class VirtualRouterSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: VirtualRouterListener })
  listeners?: VirtualRouterListener[];
}
