import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RequestCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;
}
