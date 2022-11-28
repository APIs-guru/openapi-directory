import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnomalyReportedTimeRange
/** 
 *  A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior. 
**/
export class AnomalyReportedTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloseTime" })
  closeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OpenTime" })
  openTime: Date;
}
