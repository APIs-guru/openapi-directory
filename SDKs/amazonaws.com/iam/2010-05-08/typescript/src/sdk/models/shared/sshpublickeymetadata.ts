import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// SshPublicKeyMetadata
/** 
 * <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
**/
export class SshPublicKeyMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sshPublicKeyId: string;

  @SpeakeasyMetadata()
  status: StatusTypeEnum;

  @SpeakeasyMetadata()
  uploadDate: Date;

  @SpeakeasyMetadata()
  userName: string;
}
