import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndTimeRange
/** 
 *  A range of time that specifies when anomalous behavior in an anomaly or insight ended. 
**/
export class EndTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ToTime" })
  toTime?: Date;
}
