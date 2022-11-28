import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshPublicKey } from "./sshpublickey";



// UploadSshPublicKeyResponse
/** 
 * Contains the response to a successful <a>UploadSSHPublicKey</a> request.
**/
export class UploadSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sshPublicKey?: SshPublicKey;
}
