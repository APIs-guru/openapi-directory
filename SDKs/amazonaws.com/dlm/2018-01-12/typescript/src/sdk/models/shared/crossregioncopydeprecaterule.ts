import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";



// CrossRegionCopyDeprecateRule
/** 
 * Specifies an AMI deprecation rule for cross-Region AMI copies created by a cross-Region copy rule.
**/
export class CrossRegionCopyDeprecateRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
