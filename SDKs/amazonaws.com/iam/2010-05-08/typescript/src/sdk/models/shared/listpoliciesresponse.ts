import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// ListPoliciesResponse
/** 
 * Contains the response to a successful <a>ListPolicies</a> request. 
**/
export class ListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Policy })
  policies?: Policy[];
}
