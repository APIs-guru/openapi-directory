import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCertificateAuthorityCsrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
