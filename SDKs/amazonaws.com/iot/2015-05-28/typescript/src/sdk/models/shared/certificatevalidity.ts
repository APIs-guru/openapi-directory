import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateValidity
/** 
 * When the certificate is valid.
**/
export class CertificateValidity extends SpeakeasyBase {
  @Metadata({ data: "json, name=notAfter" })
  notAfter?: Date;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: Date;
}
