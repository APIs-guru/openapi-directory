import { SpeakeasyBase } from "../../../internal/utils";
import { CrlConfiguration } from "./crlconfiguration";
import { OcspConfiguration } from "./ocspconfiguration";
/**
 * Certificate revocation information used by the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User Guide</i>.
**/
export declare class RevocationConfiguration extends SpeakeasyBase {
    crlConfiguration?: CrlConfiguration;
    ocspConfiguration?: OcspConfiguration;
}
