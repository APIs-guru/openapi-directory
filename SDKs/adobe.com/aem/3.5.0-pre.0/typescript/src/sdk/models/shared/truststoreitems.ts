import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TruststoreItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=entryType" })
  entryType?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=notAfter" })
  notAfter?: string;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: number;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
