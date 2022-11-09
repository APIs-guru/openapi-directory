import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Categories } from "./categories";
import { Transcript } from "./transcript";


// RealtimeContactAnalysisSegment
/** 
 * An analyzed segment for a real-time analysis session.
**/
export class RealtimeContactAnalysisSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Categories" })
  categories?: Categories;

  @Metadata({ data: "json, name=Transcript" })
  transcript?: Transcript;
}
