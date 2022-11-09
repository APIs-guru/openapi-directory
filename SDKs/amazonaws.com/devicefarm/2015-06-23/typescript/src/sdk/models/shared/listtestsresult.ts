import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Test } from "./test";


// ListTestsResult
/** 
 * Represents the result of a list tests request.
**/
export class ListTestsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tests", elemType: shared.Test })
  tests?: Test[];
}
