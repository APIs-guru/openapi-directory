import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregatedProfileTime } from "./aggregatedprofiletime";



// ProfilingStatus
/** 
 *  Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. 
**/
export class ProfilingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latestAgentOrchestratedAt" })
  latestAgentOrchestratedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestAgentProfileReportedAt" })
  latestAgentProfileReportedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestAggregatedProfile" })
  latestAggregatedProfile?: AggregatedProfileTime;
}
