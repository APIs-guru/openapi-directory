import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimestampStructure } from "./timestampstructure";
import { FrameMetricDatum } from "./framemetricdatum";
import { AggregationPeriodEnum } from "./aggregationperiodenum";



// BatchGetFrameMetricDataResponse
/** 
 * The structure representing the BatchGetFrameMetricDataResponse.
**/
export class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=endTimes", elemType: TimestampStructure })
  endTimes: TimestampStructure[];

  @SpeakeasyMetadata({ data: "json, name=frameMetricData", elemType: FrameMetricDatum })
  frameMetricData: FrameMetricDatum[];

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: AggregationPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=unprocessedEndTimes", elemType: TimestampStructure, elemDepth: 2 })
  unprocessedEndTimes: Map<string, TimestampStructure[]>;
}
