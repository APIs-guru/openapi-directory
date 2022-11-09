import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCertificateAuthorityCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=CertificateChain" })
  certificateChain?: string;
}
