import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Selector } from "./selector";



// Query
/** 
 * Defines the query to run against an object.
**/
export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectors", elemType: Selector })
  selectors?: Selector[];
}
