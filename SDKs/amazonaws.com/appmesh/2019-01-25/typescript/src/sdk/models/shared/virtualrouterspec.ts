import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualRouterListener } from "./virtualrouterlistener";


// VirtualRouterSpec
/** 
 * An object that represents the specification of a virtual router.
**/
export class VirtualRouterSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=listeners", elemType: shared.VirtualRouterListener })
  listeners?: VirtualRouterListener[];
}
