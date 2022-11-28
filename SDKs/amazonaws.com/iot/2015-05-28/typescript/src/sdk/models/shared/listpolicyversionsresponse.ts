import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersion } from "./policyversion";



// ListPolicyVersionsResponse
/** 
 * The output from the ListPolicyVersions operation.
**/
export class ListPolicyVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyVersions", elemType: PolicyVersion })
  policyVersions?: PolicyVersion[];
}
