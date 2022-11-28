import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
import { ServiceDiscovery } from "./servicediscovery";



// VirtualNodeSpec
/** 
 * An object representing the specification of a virtual node.
**/
export class VirtualNodeSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backends" })
  backends?: string[];

  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: Listener })
  listeners?: Listener[];

  @SpeakeasyMetadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: ServiceDiscovery;
}
