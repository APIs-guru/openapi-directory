import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupCertificateAuthorityProperties } from "./groupcertificateauthorityproperties";


export class ListGroupCertificateAuthoritiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupCertificateAuthorities", elemType: shared.GroupCertificateAuthorityProperties })
  groupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}
