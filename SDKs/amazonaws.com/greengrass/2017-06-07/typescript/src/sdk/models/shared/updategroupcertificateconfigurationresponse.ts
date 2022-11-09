import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupCertificateConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityExpiryInMilliseconds" })
  certificateAuthorityExpiryInMilliseconds?: string;

  @Metadata({ data: "json, name=CertificateExpiryInMilliseconds" })
  certificateExpiryInMilliseconds?: string;

  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;
}
