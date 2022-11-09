import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateValidationRecordStatusEnum } from "./certificatevalidationrecordstatusenum";
/**
 * Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.
**/
export declare class CertificateValidationRecord extends SpeakeasyBase {
    name?: string;
    status?: CertificateValidationRecordStatusEnum;
    type?: string;
    value?: string;
}
