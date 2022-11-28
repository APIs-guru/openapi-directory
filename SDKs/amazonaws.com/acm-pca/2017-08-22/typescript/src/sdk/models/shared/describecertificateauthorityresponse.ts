import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthority } from "./certificateauthority";



export class DescribeCertificateAuthorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthority" })
  certificateAuthority?: CertificateAuthority;
}
