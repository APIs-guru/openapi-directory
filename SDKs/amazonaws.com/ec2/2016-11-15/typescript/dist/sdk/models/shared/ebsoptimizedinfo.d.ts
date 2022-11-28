import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the optimized EBS performance for supported instance types.
**/
export declare class EbsOptimizedInfo extends SpeakeasyBase {
    baselineBandwidthInMbps?: number;
    baselineIops?: number;
    baselineThroughputInMBps?: number;
    maximumBandwidthInMbps?: number;
    maximumIops?: number;
    maximumThroughputInMBps?: number;
}
