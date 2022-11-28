import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCertificateAuthorityCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateChain" })
  certificateChain?: string;
}
