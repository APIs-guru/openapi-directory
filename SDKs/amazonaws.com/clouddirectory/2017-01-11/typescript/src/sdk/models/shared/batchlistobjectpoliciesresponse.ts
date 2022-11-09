import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchListObjectPoliciesResponse
/** 
 * Represents the output of a <a>ListObjectPolicies</a> response operation.
**/
export class BatchListObjectPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedPolicyIds" })
  attachedPolicyIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
