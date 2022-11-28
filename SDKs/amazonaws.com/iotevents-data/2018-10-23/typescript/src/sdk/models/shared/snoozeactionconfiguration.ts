import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnoozeActionConfiguration
/** 
 * Contains the configuration information of a snooze action.
**/
export class SnoozeActionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=snoozeDuration" })
  snoozeDuration?: number;
}
