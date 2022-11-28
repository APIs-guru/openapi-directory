import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UniqueProblem } from "./uniqueproblem";



// ListUniqueProblemsResult
/** 
 * Represents the result of a list unique problems request.
**/
export class ListUniqueProblemsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueProblems", elemType: UniqueProblem, elemDepth: 2 })
  uniqueProblems?: Map<string, UniqueProblem[]>;
}
