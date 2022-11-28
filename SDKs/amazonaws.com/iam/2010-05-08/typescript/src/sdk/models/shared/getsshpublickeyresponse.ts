import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshPublicKey } from "./sshpublickey";



// GetSshPublicKeyResponse
/** 
 * Contains the response to a successful <a>GetSSHPublicKey</a> request.
**/
export class GetSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sshPublicKey?: SshPublicKey;
}
