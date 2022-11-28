import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
