import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduledInstanceRecurrence
/** 
 * Describes the recurring schedule for a Scheduled Instance.
**/
export class ScheduledInstanceRecurrence extends SpeakeasyBase {
  @SpeakeasyMetadata()
  frequency?: string;

  @SpeakeasyMetadata()
  interval?: number;

  @SpeakeasyMetadata()
  occurrenceDaySet?: number[];

  @SpeakeasyMetadata()
  occurrenceRelativeToEnd?: boolean;

  @SpeakeasyMetadata()
  occurrenceUnit?: string;
}
