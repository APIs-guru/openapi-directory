import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGroupCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupCertificateAuthorityArn" })
  groupCertificateAuthorityArn?: string;

  @Metadata({ data: "json, name=GroupCertificateAuthorityId" })
  groupCertificateAuthorityId?: string;

  @Metadata({ data: "json, name=PemEncodedCertificate" })
  pemEncodedCertificate?: string;
}
