import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCertificateMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
