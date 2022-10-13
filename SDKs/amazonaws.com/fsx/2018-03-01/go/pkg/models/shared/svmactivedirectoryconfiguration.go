package shared

type SvmActiveDirectoryConfiguration struct {
	NetBiosName                             *string                               `json:"NetBiosName"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryAttributes `json:"SelfManagedActiveDirectoryConfiguration"`
}
