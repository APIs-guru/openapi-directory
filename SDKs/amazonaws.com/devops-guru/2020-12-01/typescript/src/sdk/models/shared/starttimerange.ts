import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartTimeRange
/** 
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
export class StartTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ToTime" })
  toTime?: Date;
}
