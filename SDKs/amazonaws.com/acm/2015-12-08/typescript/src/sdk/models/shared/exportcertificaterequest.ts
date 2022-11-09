import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=Passphrase" })
  passphrase: string;
}
