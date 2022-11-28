import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendDefaults } from "./backenddefaults";
import { Backend } from "./backend";
import { Listener } from "./listener";
import { Logging } from "./logging";
import { ServiceDiscovery } from "./servicediscovery";



// VirtualNodeSpec
/** 
 * An object that represents the specification of a virtual node.
**/
export class VirtualNodeSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendDefaults" })
  backendDefaults?: BackendDefaults;

  @SpeakeasyMetadata({ data: "json, name=backends", elemType: Backend })
  backends?: Backend[];

  @SpeakeasyMetadata({ data: "json, name=listeners", elemType: Listener })
  listeners?: Listener[];

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: Logging;

  @SpeakeasyMetadata({ data: "json, name=serviceDiscovery" })
  serviceDiscovery?: ServiceDiscovery;
}
