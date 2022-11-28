import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListGroupPoliciesResponse
/** 
 * Contains the response to a successful <a>ListGroupPolicies</a> request. 
**/
export class ListGroupPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  policyNames: string[];
}
