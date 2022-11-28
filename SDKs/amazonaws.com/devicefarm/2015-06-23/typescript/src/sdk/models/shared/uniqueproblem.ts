import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Problem } from "./problem";



// UniqueProblem
/** 
 * A collection of one or more problems, grouped by their result.
**/
export class UniqueProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=problems", elemType: Problem })
  problems?: Problem[];
}
