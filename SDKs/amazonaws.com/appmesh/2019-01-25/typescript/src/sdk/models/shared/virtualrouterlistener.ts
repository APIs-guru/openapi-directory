import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortMapping } from "./portmapping";



// VirtualRouterListener
/** 
 * An object that represents a virtual router listener.
**/
export class VirtualRouterListener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portMapping" })
  portMapping: PortMapping;
}
