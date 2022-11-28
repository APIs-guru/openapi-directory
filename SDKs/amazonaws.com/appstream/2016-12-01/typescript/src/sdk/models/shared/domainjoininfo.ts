import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainJoinInfo
/** 
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
export class DomainJoinInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryName" })
  directoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;
}
