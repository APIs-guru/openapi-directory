import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CostEstimationTimeRange
/** 
 * The time range of a cost estimation.
**/
export class CostEstimationTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
