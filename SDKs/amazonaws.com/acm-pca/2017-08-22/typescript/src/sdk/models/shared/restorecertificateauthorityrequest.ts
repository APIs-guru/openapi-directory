import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
