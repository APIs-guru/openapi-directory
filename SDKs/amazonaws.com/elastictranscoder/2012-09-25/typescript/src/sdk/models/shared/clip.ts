import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";



// Clip
/** 
 * Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
**/
export class Clip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimeSpan" })
  timeSpan?: TimeSpan;
}
