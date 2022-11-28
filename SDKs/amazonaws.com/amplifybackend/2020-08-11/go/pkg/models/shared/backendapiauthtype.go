package shared

// BackendAPIAuthType
// Describes the auth types for your configured data models.
type BackendAPIAuthType struct {
	Mode     *ModeEnum                      `json:"Mode,omitempty"`
	Settings *BackendAPIAppSyncAuthSettings `json:"Settings,omitempty"`
}
