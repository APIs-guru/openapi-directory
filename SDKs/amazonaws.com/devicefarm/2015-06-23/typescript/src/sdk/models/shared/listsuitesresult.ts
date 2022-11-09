import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Suite } from "./suite";


// ListSuitesResult
/** 
 * Represents the result of a list suites request.
**/
export class ListSuitesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=suites", elemType: shared.Suite })
  suites?: Suite[];
}
