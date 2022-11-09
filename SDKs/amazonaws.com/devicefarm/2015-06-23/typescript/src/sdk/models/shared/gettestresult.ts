import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Test } from "./test";


// GetTestResult
/** 
 * Represents the result of a get test request.
**/
export class GetTestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=test" })
  test?: Test;
}
