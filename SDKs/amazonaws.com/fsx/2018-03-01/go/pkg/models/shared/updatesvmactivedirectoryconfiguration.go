package shared

// UpdateSvmActiveDirectoryConfiguration
// Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD. Pleae note, account credentials are not returned in the response payload.
type UpdateSvmActiveDirectoryConfiguration struct {
	SelfManagedActiveDirectoryConfiguration *SelfManagedActiveDirectoryConfigurationUpdates `json:"SelfManagedActiveDirectoryConfiguration,omitempty"`
}
