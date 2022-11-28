import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeystoreChainItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  issuer?: string;

  @SpeakeasyMetadata()
  notAfter?: string;

  @SpeakeasyMetadata()
  notBefore?: string;

  @SpeakeasyMetadata()
  serialNumber?: number;

  @SpeakeasyMetadata()
  subject?: string;
}
