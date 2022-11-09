import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateAuthority } from "./certificateauthority";


export class DescribeCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthority" })
  certificateAuthority?: CertificateAuthority;
}
