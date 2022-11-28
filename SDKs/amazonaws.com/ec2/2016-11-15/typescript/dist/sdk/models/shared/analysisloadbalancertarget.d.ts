import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisComponent } from "./analysiscomponent";
/**
 * Describes a load balancer target.
**/
export declare class AnalysisLoadBalancerTarget extends SpeakeasyBase {
    address?: string;
    availabilityZone?: string;
    instance?: AnalysisComponent;
    port?: number;
}
