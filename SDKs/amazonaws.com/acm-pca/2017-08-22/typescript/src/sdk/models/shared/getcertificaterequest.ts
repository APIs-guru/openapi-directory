import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
