import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Test } from "./test";



// ListTestsResult
/** 
 * Represents the result of a list tests request.
**/
export class ListTestsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tests", elemType: Test })
  tests?: Test[];
}
