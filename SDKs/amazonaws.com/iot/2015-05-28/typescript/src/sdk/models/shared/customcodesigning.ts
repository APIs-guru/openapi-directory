import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningCertificateChain } from "./codesigningcertificatechain";
import { CodeSigningSignature } from "./codesigningsignature";



// CustomCodeSigning
/** 
 * Describes a custom method used to code sign a file.
**/
export class CustomCodeSigning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateChain" })
  certificateChain?: CodeSigningCertificateChain;

  @SpeakeasyMetadata({ data: "json, name=hashAlgorithm" })
  hashAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: CodeSigningSignature;

  @SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;
}
