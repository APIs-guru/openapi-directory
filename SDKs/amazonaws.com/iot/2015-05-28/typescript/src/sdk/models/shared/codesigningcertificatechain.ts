import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeSigningCertificateChain
/** 
 * Describes the certificate chain being used when code signing a file.
**/
export class CodeSigningCertificateChain extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=inlineDocument" })
  inlineDocument?: string;
}
