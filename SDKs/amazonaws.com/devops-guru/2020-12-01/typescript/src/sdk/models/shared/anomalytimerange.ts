import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnomalyTimeRange
/** 
 *  A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. 
**/
export class AnomalyTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
