import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyVersion } from "./policyversion";


// ListPolicyVersionsResponse
/** 
 * The output from the ListPolicyVersions operation.
**/
export class ListPolicyVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyVersions", elemType: shared.PolicyVersion })
  policyVersions?: PolicyVersion[];
}
