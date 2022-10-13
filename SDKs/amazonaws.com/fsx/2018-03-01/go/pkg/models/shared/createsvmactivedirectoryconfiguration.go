package shared

type CreateSvmActiveDirectoryConfiguration struct {
	NetBiosName                             string                                   `json:"NetBiosName"`
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfiguration `json:"SelfManagedActiveDirectoryConfiguration"`
}
