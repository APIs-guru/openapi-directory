import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PredictionTimeRange
/** 
 *  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. 
**/
export class PredictionTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
