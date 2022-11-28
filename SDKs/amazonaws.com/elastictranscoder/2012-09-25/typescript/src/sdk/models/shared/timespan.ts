import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeSpan
/** 
 * Settings that determine when a clip begins and how long it lasts.
**/
export class TimeSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: string;
}
