import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventTimeRange
/** 
 *  The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
**/
export class EventTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromTime" })
  fromTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ToTime" })
  toTime: Date;
}
