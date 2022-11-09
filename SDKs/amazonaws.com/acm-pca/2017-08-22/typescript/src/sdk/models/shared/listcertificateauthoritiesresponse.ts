import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateAuthority } from "./certificateauthority";


export class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorities", elemType: shared.CertificateAuthority })
  certificateAuthorities?: CertificateAuthority[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
