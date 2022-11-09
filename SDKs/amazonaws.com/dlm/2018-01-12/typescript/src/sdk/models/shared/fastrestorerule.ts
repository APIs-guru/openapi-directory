import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";


// FastRestoreRule
/** 
 * Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
**/
export class FastRestoreRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones: string[];

  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: RetentionIntervalUnitValuesEnum;
}
