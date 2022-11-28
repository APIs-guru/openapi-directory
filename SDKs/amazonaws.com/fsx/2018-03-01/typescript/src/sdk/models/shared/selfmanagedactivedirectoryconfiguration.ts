import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfManagedActiveDirectoryConfiguration
/** 
 * The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.
**/
export class SelfManagedActiveDirectoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsIps" })
  dnsIps: string[];

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemAdministratorsGroup" })
  fileSystemAdministratorsGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
