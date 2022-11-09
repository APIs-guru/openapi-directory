import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCertificateAuthorityCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
