import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCertificateAuthorityCsrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
