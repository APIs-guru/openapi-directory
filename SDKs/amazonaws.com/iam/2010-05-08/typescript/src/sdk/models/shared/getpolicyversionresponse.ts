import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersion } from "./policyversion";



// GetPolicyVersionResponse
/** 
 * Contains the response to a successful <a>GetPolicyVersion</a> request. 
**/
export class GetPolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyVersion?: PolicyVersion;
}
