import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndTimeRange
/** 
 *  A range of time that specifies when anomalous behavior in an anomaly or insight ended. 
**/
export class EndTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @Metadata({ data: "json, name=ToTime" })
  toTime?: Date;
}
