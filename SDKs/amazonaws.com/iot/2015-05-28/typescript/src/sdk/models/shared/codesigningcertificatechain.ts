import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeSigningCertificateChain
/** 
 * Describes the certificate chain being used when code signing a file.
**/
export class CodeSigningCertificateChain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=inlineDocument" })
  inlineDocument?: string;
}
