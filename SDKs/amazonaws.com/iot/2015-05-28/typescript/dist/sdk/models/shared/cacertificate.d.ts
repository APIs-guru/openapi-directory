import { SpeakeasyBase } from "../../../internal/utils";
import { CaCertificateStatusEnum } from "./cacertificatestatusenum";
/**
 * A CA certificate.
**/
export declare class CaCertificate extends SpeakeasyBase {
    certificateArn?: string;
    certificateId?: string;
    creationDate?: Date;
    status?: CaCertificateStatusEnum;
}
