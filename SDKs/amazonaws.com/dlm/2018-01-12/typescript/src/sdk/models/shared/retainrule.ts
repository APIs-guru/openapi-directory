import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";


// RetainRule
/** 
 * Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
**/
export class RetainRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
