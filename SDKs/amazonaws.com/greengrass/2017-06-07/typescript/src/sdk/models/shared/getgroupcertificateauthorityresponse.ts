import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGroupCertificateAuthorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupCertificateAuthorityArn" })
  groupCertificateAuthorityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupCertificateAuthorityId" })
  groupCertificateAuthorityId?: string;

  @SpeakeasyMetadata({ data: "json, name=PemEncodedCertificate" })
  pemEncodedCertificate?: string;
}
