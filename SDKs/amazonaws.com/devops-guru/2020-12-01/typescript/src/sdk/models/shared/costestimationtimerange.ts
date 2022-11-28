import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CostEstimationTimeRange
/** 
 * The time range of a cost estimation.
**/
export class CostEstimationTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
