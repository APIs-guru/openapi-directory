import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshPublicKeyMetadata } from "./sshpublickeymetadata";



// ListSshPublicKeysResponse
/** 
 * Contains the response to a successful <a>ListSSHPublicKeys</a> request.
**/
export class ListSshPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SshPublicKeyMetadata })
  sshPublicKeys?: SshPublicKeyMetadata[];
}
