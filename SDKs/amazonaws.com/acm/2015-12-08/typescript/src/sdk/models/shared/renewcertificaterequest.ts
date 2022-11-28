import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RenewCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
