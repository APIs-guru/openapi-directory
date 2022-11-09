import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";


// ListPrincipalPoliciesResponse
/** 
 * The output from the ListPrincipalPolicies operation.
**/
export class ListPrincipalPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.Policy })
  policies?: Policy[];
}
