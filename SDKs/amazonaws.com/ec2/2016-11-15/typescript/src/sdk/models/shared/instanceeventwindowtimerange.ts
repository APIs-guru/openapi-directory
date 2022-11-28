import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeekDayEnum } from "./weekdayenum";



// InstanceEventWindowTimeRange
/** 
 * The start day and time and the end day and time of the time range, in UTC.
**/
export class InstanceEventWindowTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endHour?: number;

  @SpeakeasyMetadata()
  endWeekDay?: WeekDayEnum;

  @SpeakeasyMetadata()
  startHour?: number;

  @SpeakeasyMetadata()
  startWeekDay?: WeekDayEnum;
}
