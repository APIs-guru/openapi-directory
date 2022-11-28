import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateValidity
/** 
 * When the certificate is valid.
**/
export class CertificateValidity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notAfter" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: Date;
}
