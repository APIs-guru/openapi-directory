import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Problem } from "./problem";


// UniqueProblem
/** 
 * A collection of one or more problems, grouped by their result.
**/
export class UniqueProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=problems", elemType: shared.Problem })
  problems?: Problem[];
}
