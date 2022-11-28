import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
import { ServiceDiscovery } from "./servicediscovery";
/**
 * An object representing the specification of a virtual node.
**/
export declare class VirtualNodeSpec extends SpeakeasyBase {
    backends?: string[];
    listeners?: Listener[];
    serviceDiscovery?: ServiceDiscovery;
}
