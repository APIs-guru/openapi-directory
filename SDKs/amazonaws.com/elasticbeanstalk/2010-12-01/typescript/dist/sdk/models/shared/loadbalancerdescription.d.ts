import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
/**
 * Describes the details of a LoadBalancer.
**/
export declare class LoadBalancerDescription extends SpeakeasyBase {
    domain?: string;
    listeners?: Listener[];
    loadBalancerName?: string;
}
