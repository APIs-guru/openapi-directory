import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;
}
