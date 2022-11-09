import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Suite } from "./suite";


// GetSuiteResult
/** 
 * Represents the result of a get suite request.
**/
export class GetSuiteResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=suite" })
  suite?: Suite;
}
