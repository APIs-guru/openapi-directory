import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnomalyTimeRange
/** 
 *  A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. 
**/
export class AnomalyTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
