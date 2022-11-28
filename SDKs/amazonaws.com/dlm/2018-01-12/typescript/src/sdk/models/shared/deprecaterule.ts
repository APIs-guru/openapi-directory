import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";



// DeprecateRule
/** 
 * Specifies an AMI deprecation rule for a schedule.
**/
export class DeprecateRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
