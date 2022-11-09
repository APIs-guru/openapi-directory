import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfManagedActiveDirectoryConfiguration
/** 
 * The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.
**/
export class SelfManagedActiveDirectoryConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsIps" })
  dnsIps: string[];

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=FileSystemAdministratorsGroup" })
  fileSystemAdministratorsGroup?: string;

  @Metadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
