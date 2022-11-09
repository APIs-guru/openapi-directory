import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLunaClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateFingerprint" })
  certificateFingerprint?: string;

  @Metadata({ data: "json, name=ClientArn" })
  clientArn?: string;
}
