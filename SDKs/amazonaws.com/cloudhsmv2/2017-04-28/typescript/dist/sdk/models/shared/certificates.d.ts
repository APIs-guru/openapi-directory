import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains one or more certificates or a certificate signing request (CSR).
**/
export declare class Certificates extends SpeakeasyBase {
    awsHardwareCertificate?: string;
    clusterCertificate?: string;
    clusterCsr?: string;
    hsmCertificate?: string;
    manufacturerHardwareCertificate?: string;
}
