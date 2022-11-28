import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// CreatePolicyResponse
/** 
 * Contains the response to a successful <a>CreatePolicy</a> request. 
**/
export class CreatePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policy?: Policy;
}
