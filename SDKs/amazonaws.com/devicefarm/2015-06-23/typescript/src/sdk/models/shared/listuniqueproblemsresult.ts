import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UniqueProblem } from "./uniqueproblem";


// ListUniqueProblemsResult
/** 
 * Represents the result of a list unique problems request.
**/
export class ListUniqueProblemsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=uniqueProblems", elemType: shared.UniqueProblem, elemDepth: 2 })
  uniqueProblems?: Map<string, UniqueProblem[]>;
}
