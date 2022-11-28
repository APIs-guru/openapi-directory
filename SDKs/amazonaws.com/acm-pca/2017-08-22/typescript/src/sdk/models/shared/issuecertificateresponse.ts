import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IssueCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;
}
