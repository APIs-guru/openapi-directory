import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// SshPublicKey
/** 
 * <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
**/
export class SshPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fingerprint: string;

  @SpeakeasyMetadata()
  sshPublicKeyBody: string;

  @SpeakeasyMetadata()
  sshPublicKeyId: string;

  @SpeakeasyMetadata()
  status: StatusTypeEnum;

  @SpeakeasyMetadata()
  uploadDate?: Date;

  @SpeakeasyMetadata()
  userName: string;
}
