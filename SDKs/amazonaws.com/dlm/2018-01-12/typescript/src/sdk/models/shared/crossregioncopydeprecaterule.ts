import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";


// CrossRegionCopyDeprecateRule
/** 
 * Specifies an AMI deprecation rule for cross-Region AMI copies created by a cross-Region copy rule.
**/
export class CrossRegionCopyDeprecateRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
