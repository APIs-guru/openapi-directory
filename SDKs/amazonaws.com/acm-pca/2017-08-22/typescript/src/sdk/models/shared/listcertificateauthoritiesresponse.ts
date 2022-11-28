import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthority } from "./certificateauthority";



export class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorities", elemType: CertificateAuthority })
  certificateAuthorities?: CertificateAuthority[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
