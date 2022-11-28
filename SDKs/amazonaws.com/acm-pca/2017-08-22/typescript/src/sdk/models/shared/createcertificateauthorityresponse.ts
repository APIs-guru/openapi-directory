import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCertificateAuthorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn?: string;
}
