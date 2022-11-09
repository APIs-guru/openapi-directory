import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeSpan
/** 
 * Settings that determine when a clip begins and how long it lasts.
**/
export class TimeSpan extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: string;
}
