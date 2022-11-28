import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Suite } from "./suite";



// ListSuitesResult
/** 
 * Represents the result of a list suites request.
**/
export class ListSuitesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=suites", elemType: Suite })
  suites?: Suite[];
}
