import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartTimeRange
/** 
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
export class StartTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @Metadata({ data: "json, name=ToTime" })
  toTime?: Date;
}
