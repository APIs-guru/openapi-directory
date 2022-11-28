import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Suite } from "./suite";



// GetSuiteResult
/** 
 * Represents the result of a get suite request.
**/
export class GetSuiteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suite" })
  suite?: Suite;
}
