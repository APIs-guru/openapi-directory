package shared

// SelfManagedActiveDirectoryConfiguration
// The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.
type SelfManagedActiveDirectoryConfiguration struct {
	DNSIps                              []string `json:"DnsIps"`
	DomainName                          string   `json:"DomainName"`
	FileSystemAdministratorsGroup       *string  `json:"FileSystemAdministratorsGroup,omitempty"`
	OrganizationalUnitDistinguishedName *string  `json:"OrganizationalUnitDistinguishedName,omitempty"`
	Password                            string   `json:"Password"`
	UserName                            string   `json:"UserName"`
}
