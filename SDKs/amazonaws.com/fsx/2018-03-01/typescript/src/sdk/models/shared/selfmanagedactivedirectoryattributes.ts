import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfManagedActiveDirectoryAttributes
/** 
 * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
**/
export class SelfManagedActiveDirectoryAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsIps" })
  dnsIps?: string[];

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=FileSystemAdministratorsGroup" })
  fileSystemAdministratorsGroup?: string;

  @Metadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
