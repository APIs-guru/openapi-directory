import { SpeakeasyBase } from "../../../internal/utils";
import { UniqueProblem } from "./uniqueproblem";
/**
 * Represents the result of a list unique problems request.
**/
export declare class ListUniqueProblemsResult extends SpeakeasyBase {
    nextToken?: string;
    uniqueProblems?: Map<string, UniqueProblem[]>;
}
