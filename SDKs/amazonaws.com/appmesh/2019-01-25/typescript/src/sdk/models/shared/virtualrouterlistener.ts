import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortMapping } from "./portmapping";


// VirtualRouterListener
/** 
 * An object that represents a virtual router listener.
**/
export class VirtualRouterListener extends SpeakeasyBase {
  @Metadata({ data: "json, name=portMapping" })
  portMapping: PortMapping;
}
