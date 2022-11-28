import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Test } from "./test";



// GetTestResult
/** 
 * Represents the result of a get test request.
**/
export class GetTestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: Test;
}
