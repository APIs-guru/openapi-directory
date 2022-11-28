import { SpeakeasyBase } from "../../../internal/utils";
import { SshPublicKey } from "./sshpublickey";
/**
 * Contains the response to a successful <a>GetSSHPublicKey</a> request.
**/
export declare class GetSshPublicKeyResponse extends SpeakeasyBase {
    sshPublicKey?: SshPublicKey;
}
