import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
**/
export declare class SshPublicKeyMetadata extends SpeakeasyBase {
    sshPublicKeyId: string;
    status: StatusTypeEnum;
    uploadDate: Date;
    userName: string;
}
