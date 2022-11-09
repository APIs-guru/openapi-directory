import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IntervalUnitValuesEnum } from "./intervalunitvaluesenum";
import { LocationValuesEnum } from "./locationvaluesenum";


// CreateRule
/** 
 * <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
**/
export class CreateRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=CronExpression" })
  cronExpression?: string;

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=IntervalUnit" })
  intervalUnit?: IntervalUnitValuesEnum;

  @Metadata({ data: "json, name=Location" })
  location?: LocationValuesEnum;

  @Metadata({ data: "json, name=Times" })
  times?: string[];
}
