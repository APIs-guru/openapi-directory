import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PredictionTimeRange
/** 
 *  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. 
**/
export class PredictionTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
