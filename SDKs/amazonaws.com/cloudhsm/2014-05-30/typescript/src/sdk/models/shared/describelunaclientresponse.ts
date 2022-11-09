import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLunaClientResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=CertificateFingerprint" })
  certificateFingerprint?: string;

  @Metadata({ data: "json, name=ClientArn" })
  clientArn?: string;

  @Metadata({ data: "json, name=Label" })
  label?: string;

  @Metadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: string;
}
