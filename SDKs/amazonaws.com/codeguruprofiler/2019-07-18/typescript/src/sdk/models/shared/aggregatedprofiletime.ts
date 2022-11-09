import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationPeriodEnum } from "./aggregationperiodenum";


// AggregatedProfileTime
/** 
 *  Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes). 
**/
export class AggregatedProfileTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=period" })
  period?: AggregationPeriodEnum;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}
