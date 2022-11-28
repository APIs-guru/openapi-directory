import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListRolePoliciesResponse
/** 
 * Contains the response to a successful <a>ListRolePolicies</a> request. 
**/
export class ListRolePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  policyNames: string[];
}
