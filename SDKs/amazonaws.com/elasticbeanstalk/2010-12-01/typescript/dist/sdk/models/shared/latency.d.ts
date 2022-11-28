import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the average latency for the slowest X percent of requests over the last 10 seconds.
**/
export declare class Latency extends SpeakeasyBase {
    p10?: number;
    p50?: number;
    p75?: number;
    p85?: number;
    p90?: number;
    p95?: number;
    p99?: number;
    p999?: number;
}
