import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRegistrationStatusEnum } from "./autoregistrationstatusenum";
import { CaCertificateStatusEnum } from "./cacertificatestatusenum";
import { CertificateValidity } from "./certificatevalidity";
/**
 * Describes a CA certificate.
**/
export declare class CaCertificateDescription extends SpeakeasyBase {
    autoRegistrationStatus?: AutoRegistrationStatusEnum;
    certificateArn?: string;
    certificateId?: string;
    certificatePem?: string;
    creationDate?: Date;
    customerVersion?: number;
    generationId?: string;
    lastModifiedDate?: Date;
    ownedBy?: string;
    status?: CaCertificateStatusEnum;
    validity?: CertificateValidity;
}
