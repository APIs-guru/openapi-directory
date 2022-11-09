import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Pattern } from "./pattern";
import { Match } from "./match";


// Recommendation
/** 
 * A potential improvement that was found from analyzing the profiling data.
**/
export class Recommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=allMatchesCount" })
  allMatchesCount: number;

  @Metadata({ data: "json, name=allMatchesSum" })
  allMatchesSum: number;

  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=pattern" })
  pattern: Pattern;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=topMatches", elemType: shared.Match })
  topMatches: Match[];
}
