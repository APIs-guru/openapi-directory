import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";


// DeprecateRule
/** 
 * Specifies an AMI deprecation rule for a schedule.
**/
export class DeprecateRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
