import { SpeakeasyBase } from "../../../internal/utils";
import { SshPublicKey } from "./sshpublickey";
/**
 * Contains the response to a successful <a>UploadSSHPublicKey</a> request.
**/
export declare class UploadSshPublicKeyResponse extends SpeakeasyBase {
    sshPublicKey?: SshPublicKey;
}
