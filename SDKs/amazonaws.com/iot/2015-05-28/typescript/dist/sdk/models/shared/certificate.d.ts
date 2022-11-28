import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
/**
 * Information about a certificate.
**/
export declare class Certificate extends SpeakeasyBase {
    certificateArn?: string;
    certificateId?: string;
    certificateMode?: CertificateModeEnum;
    creationDate?: Date;
    status?: CertificateStatusEnum;
}
