import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedProfileTime } from "./aggregatedprofiletime";
/**
 *  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.
**/
export declare class ProfilingStatus extends SpeakeasyBase {
    latestAgentOrchestratedAt?: Date;
    latestAgentProfileReportedAt?: Date;
    latestAggregatedProfile?: AggregatedProfileTime;
}
