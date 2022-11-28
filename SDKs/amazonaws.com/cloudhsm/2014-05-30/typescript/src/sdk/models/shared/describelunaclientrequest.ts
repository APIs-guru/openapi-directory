import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLunaClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateFingerprint" })
  certificateFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientArn" })
  clientArn?: string;
}
