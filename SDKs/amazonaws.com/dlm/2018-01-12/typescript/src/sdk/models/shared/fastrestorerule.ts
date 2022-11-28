import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";



// FastRestoreRule
/** 
 * Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
**/
export class FastRestoreRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones: string[];

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
