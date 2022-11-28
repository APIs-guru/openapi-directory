import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";



// RetainRule
/** 
 * Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
**/
export class RetainRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
