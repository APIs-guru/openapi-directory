import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TruststoreItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=entryType" })
  entryType?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=notAfter" })
  notAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
