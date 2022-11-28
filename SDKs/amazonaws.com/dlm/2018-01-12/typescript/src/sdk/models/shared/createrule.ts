import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntervalUnitValuesEnum } from "./intervalunitvaluesenum";
import { LocationValuesEnum } from "./locationvaluesenum";



// CreateRule
/** 
 * <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
**/
export class CreateRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CronExpression" })
  cronExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: IntervalUnitValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: LocationValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=Times" })
  times?: string[];
}
