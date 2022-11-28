import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightTimeRange
/** 
 *  A time ranged that specifies when the observed behavior in an insight started and ended. 
**/
export class InsightTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
