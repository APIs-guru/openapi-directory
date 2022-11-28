import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGroupCertificateConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityExpiryInMilliseconds" })
  certificateAuthorityExpiryInMilliseconds?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateExpiryInMilliseconds" })
  certificateExpiryInMilliseconds?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;
}
