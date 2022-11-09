import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnoozeActionConfiguration
/** 
 * Contains the configuration information of a snooze action.
**/
export class SnoozeActionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=snoozeDuration" })
  snoozeDuration?: number;
}
