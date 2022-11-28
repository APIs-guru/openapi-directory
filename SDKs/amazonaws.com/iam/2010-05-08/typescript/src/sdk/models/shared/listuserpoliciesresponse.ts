import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListUserPoliciesResponse
/** 
 * Contains the response to a successful <a>ListUserPolicies</a> request. 
**/
export class ListUserPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  policyNames: string[];
}
