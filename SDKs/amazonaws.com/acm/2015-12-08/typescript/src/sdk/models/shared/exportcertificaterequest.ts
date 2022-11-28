import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=Passphrase" })
  passphrase: string;
}
