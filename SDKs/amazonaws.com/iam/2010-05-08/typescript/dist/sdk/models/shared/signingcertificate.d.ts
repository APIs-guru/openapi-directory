import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
**/
export declare class SigningCertificate extends SpeakeasyBase {
    certificateBody: string;
    certificateId: string;
    status: StatusTypeEnum;
    uploadDate?: Date;
    userName: string;
}
