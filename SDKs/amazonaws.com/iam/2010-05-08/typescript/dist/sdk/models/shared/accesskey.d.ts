import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * <p>Contains information about an Amazon Web Services access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
**/
export declare class AccessKey extends SpeakeasyBase {
    accessKeyId: string;
    createDate?: Date;
    secretAccessKey: string;
    status: StatusTypeEnum;
    userName: string;
}
