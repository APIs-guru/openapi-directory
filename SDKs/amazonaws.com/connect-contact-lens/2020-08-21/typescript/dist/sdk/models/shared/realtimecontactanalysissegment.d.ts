import { SpeakeasyBase } from "../../../internal/utils";
import { Categories } from "./categories";
import { Transcript } from "./transcript";
/**
 * An analyzed segment for a real-time analysis session.
**/
export declare class RealtimeContactAnalysisSegment extends SpeakeasyBase {
    categories?: Categories;
    transcript?: Transcript;
}
