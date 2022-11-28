import { SpeakeasyBase } from "../../../internal/utils";
import { Pattern } from "./pattern";
import { Match } from "./match";
/**
 * A potential improvement that was found from analyzing the profiling data.
**/
export declare class Recommendation extends SpeakeasyBase {
    allMatchesCount: number;
    allMatchesSum: number;
    endTime: Date;
    pattern: Pattern;
    startTime: Date;
    topMatches: Match[];
}
