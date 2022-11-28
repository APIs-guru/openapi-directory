import { SpeakeasyBase } from "../../../internal/utils";
import { CsrExtensions } from "./csrextensions";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { SigningAlgorithmEnum } from "./signingalgorithmenum";
import { Asn1Subject } from "./asn1subject";
/**
 * Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
**/
export declare class CertificateAuthorityConfiguration extends SpeakeasyBase {
    csrExtensions?: CsrExtensions;
    keyAlgorithm: KeyAlgorithmEnum;
    signingAlgorithm: SigningAlgorithmEnum;
    subject: Asn1Subject;
}
