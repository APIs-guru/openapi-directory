import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateRevocationListStatusCodeEnum } from "./clientcertificaterevocationliststatuscodeenum";
/**
 * Describes the state of a client certificate revocation list.
**/
export declare class ClientCertificateRevocationListStatus extends SpeakeasyBase {
    code?: ClientCertificateRevocationListStatusCodeEnum;
    message?: string;
}
