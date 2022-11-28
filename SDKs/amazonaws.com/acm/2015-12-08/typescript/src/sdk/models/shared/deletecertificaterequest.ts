import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
