import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { PortMapping } from "./portmapping";
/**
 * An object representing a listener for a virtual node.
**/
export declare class Listener extends SpeakeasyBase {
    healthCheck?: HealthCheckPolicy;
    portMapping?: PortMapping;
}
