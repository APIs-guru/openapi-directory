import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfManagedActiveDirectoryAttributes
/** 
 * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
**/
export class SelfManagedActiveDirectoryAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsIps" })
  dnsIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemAdministratorsGroup" })
  fileSystemAdministratorsGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
