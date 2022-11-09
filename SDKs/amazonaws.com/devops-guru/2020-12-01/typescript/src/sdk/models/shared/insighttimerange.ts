import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightTimeRange
/** 
 *  A time ranged that specifies when the observed behavior in an insight started and ended. 
**/
export class InsightTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
