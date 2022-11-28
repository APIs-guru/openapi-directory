import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// GetPolicyResponse
/** 
 * Contains the response to a successful <a>GetPolicy</a> request. 
**/
export class GetPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policy?: Policy;
}
