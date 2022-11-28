import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
/**
 * Contains general information about a certificate.
**/
export declare class CertificateInfo extends SpeakeasyBase {
    certificateId?: string;
    commonName?: string;
    expiryDateTime?: Date;
    state?: CertificateStateEnum;
    type?: CertificateTypeEnum;
}
