import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersion } from "./policyversion";



// CreatePolicyVersionResponse
/** 
 * Contains the response to a successful <a>CreatePolicyVersion</a> request. 
**/
export class CreatePolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyVersion?: PolicyVersion;
}
