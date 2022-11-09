import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainJoinInfo
/** 
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
export class DomainJoinInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryName" })
  directoryName?: string;

  @Metadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;
}
