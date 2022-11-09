import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventTimeRange
/** 
 *  The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
**/
export class EventTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromTime" })
  fromTime: Date;

  @Metadata({ data: "json, name=ToTime" })
  toTime: Date;
}
