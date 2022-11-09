import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";


// CrossRegionCopyRetainRule
/** 
 * Specifies the retention rule for cross-Region snapshot copies.
**/
export class CrossRegionCopyRetainRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
