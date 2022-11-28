import { SpeakeasyBase } from "../../../internal/utils";
import { BackendDefaults } from "./backenddefaults";
import { Backend } from "./backend";
import { Listener } from "./listener";
import { Logging } from "./logging";
import { ServiceDiscovery } from "./servicediscovery";
/**
 * An object that represents the specification of a virtual node.
**/
export declare class VirtualNodeSpec extends SpeakeasyBase {
    backendDefaults?: BackendDefaults;
    backends?: Backend[];
    listeners?: Listener[];
    logging?: Logging;
    serviceDiscovery?: ServiceDiscovery;
}
