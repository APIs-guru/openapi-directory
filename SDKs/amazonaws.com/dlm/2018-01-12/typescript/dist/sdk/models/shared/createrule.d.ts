import { SpeakeasyBase } from "../../../internal/utils";
import { IntervalUnitValuesEnum } from "./intervalunitvaluesenum";
import { LocationValuesEnum } from "./locationvaluesenum";
/**
 * <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
**/
export declare class CreateRule extends SpeakeasyBase {
    cronExpression?: string;
    interval?: number;
    intervalUnit?: IntervalUnitValuesEnum;
    location?: LocationValuesEnum;
    times?: string[];
}
