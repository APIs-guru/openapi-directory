package shared

// SvmActiveDirectoryConfiguration
// Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.
type SvmActiveDirectoryConfiguration struct {
	NetBiosName                             *string                               `json:"NetBiosName,omitempty"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryAttributes `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
}
