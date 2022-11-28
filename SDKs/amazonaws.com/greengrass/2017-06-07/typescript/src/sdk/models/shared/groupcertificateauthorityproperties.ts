import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupCertificateAuthorityProperties
/** 
 * Information about a certificate authority for a group.
**/
export class GroupCertificateAuthorityProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupCertificateAuthorityArn" })
  groupCertificateAuthorityArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupCertificateAuthorityId" })
  groupCertificateAuthorityId?: string;
}
