import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;
}
