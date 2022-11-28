import { SpeakeasyBase } from "../../../internal/utils";
import { TimestampStructure } from "./timestampstructure";
import { FrameMetricDatum } from "./framemetricdatum";
import { AggregationPeriodEnum } from "./aggregationperiodenum";
/**
 * The structure representing the BatchGetFrameMetricDataResponse.
**/
export declare class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
    endTime: Date;
    endTimes: TimestampStructure[];
    frameMetricData: FrameMetricDatum[];
    resolution: AggregationPeriodEnum;
    startTime: Date;
    unprocessedEndTimes: Map<string, TimestampStructure[]>;
}
