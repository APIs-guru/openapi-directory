import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterCertificateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateId" })
  certificateId?: string;
}
