import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchListObjectPoliciesResponse
/** 
 * Represents the output of a <a>ListObjectPolicies</a> response operation.
**/
export class BatchListObjectPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedPolicyIds" })
  attachedPolicyIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
