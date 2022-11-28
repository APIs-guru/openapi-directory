import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectionScheduleTimeUnitEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks",
    Months = "months"
}


// ConnectionSchedule
/** 
 * if null, then no schedule is set.
**/
export class ConnectionSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit: ConnectionScheduleTimeUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units: number;
}
