import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSpan } from "./timespan";


// Clip
/** 
 * Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
**/
export class Clip extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimeSpan" })
  timeSpan?: TimeSpan;
}
