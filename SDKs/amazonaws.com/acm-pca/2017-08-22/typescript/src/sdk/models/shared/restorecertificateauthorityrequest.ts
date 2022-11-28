import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
