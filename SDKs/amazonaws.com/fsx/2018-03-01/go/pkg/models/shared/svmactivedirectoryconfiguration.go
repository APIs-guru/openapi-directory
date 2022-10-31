package shared



type SvmActiveDirectoryConfiguration struct {
    NetBiosName *string `json:"NetBiosName,omitempty"`
    SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryAttributes `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
    
}

