import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterCertificateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateId" })
  certificateId?: string;
}
