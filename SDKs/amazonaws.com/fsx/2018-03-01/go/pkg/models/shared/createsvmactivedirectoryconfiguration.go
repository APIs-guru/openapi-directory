package shared

// CreateSvmActiveDirectoryConfiguration
// The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.
type CreateSvmActiveDirectoryConfiguration struct {
	NetBiosName                             string                                   `json:"NetBiosName"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfiguration `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
}
