import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupCertificateAuthorityProperties } from "./groupcertificateauthorityproperties";



export class ListGroupCertificateAuthoritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupCertificateAuthorities", elemType: GroupCertificateAuthorityProperties })
  groupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}
