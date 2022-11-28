import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyUsage
/** 
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
**/
export class KeyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CRLSign" })
  crlSign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DataEncipherment" })
  dataEncipherment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DecipherOnly" })
  decipherOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DigitalSignature" })
  digitalSignature?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EncipherOnly" })
  encipherOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeyAgreement" })
  keyAgreement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeyCertSign" })
  keyCertSign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeyEncipherment" })
  keyEncipherment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NonRepudiation" })
  nonRepudiation?: boolean;
}
