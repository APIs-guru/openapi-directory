import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupCertificateAuthorityProperties
/** 
 * Information about a certificate authority for a group.
**/
export class GroupCertificateAuthorityProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupCertificateAuthorityArn" })
  groupCertificateAuthorityArn?: string;

  @Metadata({ data: "json, name=GroupCertificateAuthorityId" })
  groupCertificateAuthorityId?: string;
}
