import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetContextKeysForPolicyResponse
/** 
 * Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. 
**/
export class GetContextKeysForPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contextKeyNames?: string[];
}
