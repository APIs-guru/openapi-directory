import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyUsage
/** 
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
**/
export class KeyUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CRLSign" })
  crlSign?: boolean;

  @Metadata({ data: "json, name=DataEncipherment" })
  dataEncipherment?: boolean;

  @Metadata({ data: "json, name=DecipherOnly" })
  decipherOnly?: boolean;

  @Metadata({ data: "json, name=DigitalSignature" })
  digitalSignature?: boolean;

  @Metadata({ data: "json, name=EncipherOnly" })
  encipherOnly?: boolean;

  @Metadata({ data: "json, name=KeyAgreement" })
  keyAgreement?: boolean;

  @Metadata({ data: "json, name=KeyCertSign" })
  keyCertSign?: boolean;

  @Metadata({ data: "json, name=KeyEncipherment" })
  keyEncipherment?: boolean;

  @Metadata({ data: "json, name=NonRepudiation" })
  nonRepudiation?: boolean;
}
