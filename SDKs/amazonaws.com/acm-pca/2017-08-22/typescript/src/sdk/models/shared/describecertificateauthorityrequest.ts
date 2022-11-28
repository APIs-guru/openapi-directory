import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
