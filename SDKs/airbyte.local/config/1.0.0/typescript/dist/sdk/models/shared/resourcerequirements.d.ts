import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * optional resource requirements to run workers (blank for unbounded allocations)
**/
export declare class ResourceRequirements extends SpeakeasyBase {
    cpuLimit?: string;
    cpuRequest?: string;
    memoryLimit?: string;
    memoryRequest?: string;
}
