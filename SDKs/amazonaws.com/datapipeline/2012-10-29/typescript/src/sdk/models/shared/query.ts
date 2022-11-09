import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Selector } from "./selector";


// Query
/** 
 * Defines the query to run against an object.
**/
export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=selectors", elemType: shared.Selector })
  selectors?: Selector[];
}
