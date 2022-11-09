import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeSigningCertificateChain } from "./codesigningcertificatechain";
import { CodeSigningSignature } from "./codesigningsignature";


// CustomCodeSigning
/** 
 * Describes a custom method used to code sign a file.
**/
export class CustomCodeSigning extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateChain" })
  certificateChain?: CodeSigningCertificateChain;

  @Metadata({ data: "json, name=hashAlgorithm" })
  hashAlgorithm?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: CodeSigningSignature;

  @Metadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;
}
