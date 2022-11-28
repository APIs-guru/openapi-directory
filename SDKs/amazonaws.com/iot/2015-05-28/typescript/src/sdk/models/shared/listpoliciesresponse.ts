import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// ListPoliciesResponse
/** 
 * The output from the ListPolicies operation.
**/
export class ListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: Policy })
  policies?: Policy[];
}
