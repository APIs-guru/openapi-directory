import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLunaClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateFingerprint" })
  certificateFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: string;
}
