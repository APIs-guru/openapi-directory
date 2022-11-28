import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pattern } from "./pattern";
import { Match } from "./match";



// Recommendation
/** 
 * A potential improvement that was found from analyzing the profiling data.
**/
export class Recommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allMatchesCount" })
  allMatchesCount: number;

  @SpeakeasyMetadata({ data: "json, name=allMatchesSum" })
  allMatchesSum: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern: Pattern;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=topMatches", elemType: Match })
  topMatches: Match[];
}
