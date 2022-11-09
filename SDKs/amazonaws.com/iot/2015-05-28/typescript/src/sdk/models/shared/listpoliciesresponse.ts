import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";


// ListPoliciesResponse
/** 
 * The output from the ListPolicies operation.
**/
export class ListPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
