import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";



// ListAttachedRolePoliciesResponse
/** 
 * Contains the response to a successful <a>ListAttachedRolePolicies</a> request. 
**/
export class ListAttachedRolePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttachedPolicy })
  attachedPolicies?: AttachedPolicy[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
