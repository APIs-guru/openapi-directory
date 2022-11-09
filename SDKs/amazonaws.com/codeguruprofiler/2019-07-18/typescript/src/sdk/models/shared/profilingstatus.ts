import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregatedProfileTime } from "./aggregatedprofiletime";


// ProfilingStatus
/** 
 *  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. 
**/
export class ProfilingStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=latestAgentOrchestratedAt" })
  latestAgentOrchestratedAt?: Date;

  @Metadata({ data: "json, name=latestAgentProfileReportedAt" })
  latestAgentProfileReportedAt?: Date;

  @Metadata({ data: "json, name=latestAggregatedProfile" })
  latestAggregatedProfile?: AggregatedProfileTime;
}
