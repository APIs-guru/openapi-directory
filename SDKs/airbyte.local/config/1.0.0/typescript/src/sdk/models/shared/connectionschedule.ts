import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConnectionScheduleTimeUnitEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
,    Weeks = "weeks"
,    Months = "months"
}


// ConnectionSchedule
/** 
 * if null, then no schedule is set.
**/
export class ConnectionSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeUnit" })
  timeUnit: ConnectionScheduleTimeUnitEnum;

  @Metadata({ data: "json, name=units" })
  units: number;
}
