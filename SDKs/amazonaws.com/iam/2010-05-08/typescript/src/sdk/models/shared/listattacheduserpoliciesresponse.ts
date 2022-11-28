import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";



// ListAttachedUserPoliciesResponse
/** 
 * Contains the response to a successful <a>ListAttachedUserPolicies</a> request. 
**/
export class ListAttachedUserPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttachedPolicy })
  attachedPolicies?: AttachedPolicy[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
