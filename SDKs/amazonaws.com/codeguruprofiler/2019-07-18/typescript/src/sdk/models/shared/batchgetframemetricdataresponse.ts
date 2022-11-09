import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimestampStructure } from "./timestampstructure";
import { FrameMetricDatum } from "./framemetricdatum";
import { AggregationPeriodEnum } from "./aggregationperiodenum";
import { TimestampStructure } from "./timestampstructure";


// BatchGetFrameMetricDataResponse
/** 
 * The structure representing the BatchGetFrameMetricDataResponse.
**/
export class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=endTimes", elemType: shared.TimestampStructure })
  endTimes: TimestampStructure[];

  @Metadata({ data: "json, name=frameMetricData", elemType: shared.FrameMetricDatum })
  frameMetricData: FrameMetricDatum[];

  @Metadata({ data: "json, name=resolution" })
  resolution: AggregationPeriodEnum;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=unprocessedEndTimes", elemType: shared.TimestampStructure, elemDepth: 2 })
  unprocessedEndTimes: Map<string, TimestampStructure[]>;
}
