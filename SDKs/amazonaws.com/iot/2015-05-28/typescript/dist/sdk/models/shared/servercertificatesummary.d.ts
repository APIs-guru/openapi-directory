import { SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificateStatusEnum } from "./servercertificatestatusenum";
/**
 * An object that contains information about a server certificate.
**/
export declare class ServerCertificateSummary extends SpeakeasyBase {
    serverCertificateArn?: string;
    serverCertificateStatus?: ServerCertificateStatusEnum;
    serverCertificateStatusDetail?: string;
}
