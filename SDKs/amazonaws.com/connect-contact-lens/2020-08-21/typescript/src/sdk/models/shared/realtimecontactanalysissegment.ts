import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Categories } from "./categories";
import { Transcript } from "./transcript";



// RealtimeContactAnalysisSegment
/** 
 * An analyzed segment for a real-time analysis session.
**/
export class RealtimeContactAnalysisSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Categories" })
  categories?: Categories;

  @SpeakeasyMetadata({ data: "json, name=Transcript" })
  transcript?: Transcript;
}
