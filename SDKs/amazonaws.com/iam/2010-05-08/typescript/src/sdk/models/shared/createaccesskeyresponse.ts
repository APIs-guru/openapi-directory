import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessKey } from "./accesskey";



// CreateAccessKeyResponse
/** 
 * Contains the response to a successful <a>CreateAccessKey</a> request. 
**/
export class CreateAccessKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessKey: AccessKey;
}
