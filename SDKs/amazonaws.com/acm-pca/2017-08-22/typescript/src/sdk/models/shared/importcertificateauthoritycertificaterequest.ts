import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportCertificateAuthorityCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateChain" })
  certificateChain?: string;
}
