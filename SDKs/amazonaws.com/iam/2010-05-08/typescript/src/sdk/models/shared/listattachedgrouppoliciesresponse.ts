import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";



// ListAttachedGroupPoliciesResponse
/** 
 * Contains the response to a successful <a>ListAttachedGroupPolicies</a> request. 
**/
export class ListAttachedGroupPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttachedPolicy })
  attachedPolicies?: AttachedPolicy[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
