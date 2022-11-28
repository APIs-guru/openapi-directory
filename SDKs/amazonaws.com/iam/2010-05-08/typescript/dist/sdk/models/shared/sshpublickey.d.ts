import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
**/
export declare class SshPublicKey extends SpeakeasyBase {
    fingerprint: string;
    sshPublicKeyBody: string;
    sshPublicKeyId: string;
    status: StatusTypeEnum;
    uploadDate?: Date;
    userName: string;
}
