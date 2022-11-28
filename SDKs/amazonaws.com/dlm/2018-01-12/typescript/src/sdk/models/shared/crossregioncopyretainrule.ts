import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";



// CrossRegionCopyRetainRule
/** 
 * Specifies the retention rule for cross-Region snapshot copies.
**/
export class CrossRegionCopyRetainRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
