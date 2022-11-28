import { SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningCertificateChain } from "./codesigningcertificatechain";
import { CodeSigningSignature } from "./codesigningsignature";
/**
 * Describes a custom method used to code sign a file.
**/
export declare class CustomCodeSigning extends SpeakeasyBase {
    certificateChain?: CodeSigningCertificateChain;
    hashAlgorithm?: string;
    signature?: CodeSigningSignature;
    signatureAlgorithm?: string;
}
