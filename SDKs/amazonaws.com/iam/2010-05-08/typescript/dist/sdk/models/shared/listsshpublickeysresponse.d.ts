import { SpeakeasyBase } from "../../../internal/utils";
import { SshPublicKeyMetadata } from "./sshpublickeymetadata";
/**
 * Contains the response to a successful <a>ListSSHPublicKeys</a> request.
**/
export declare class ListSshPublicKeysResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    sshPublicKeys?: SshPublicKeyMetadata[];
}
