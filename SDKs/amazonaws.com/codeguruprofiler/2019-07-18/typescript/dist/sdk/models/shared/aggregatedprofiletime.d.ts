import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationPeriodEnum } from "./aggregationperiodenum";
/**
 *  Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes).
**/
export declare class AggregatedProfileTime extends SpeakeasyBase {
    period?: AggregationPeriodEnum;
    start?: Date;
}
