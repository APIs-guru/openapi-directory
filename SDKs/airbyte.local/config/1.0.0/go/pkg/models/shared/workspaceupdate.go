package shared

type WorkspaceUpdate struct {
	AnonymousDataCollection bool           `json:"anonymousDataCollection"`
	DisplaySetupWizard      *bool          `json:"displaySetupWizard,omitempty"`
	Email                   *string        `json:"email,omitempty"`
	InitialSetupComplete    bool           `json:"initialSetupComplete"`
	News                    bool           `json:"news"`
	Notifications           []Notification `json:"notifications,omitempty"`
	SecurityUpdates         bool           `json:"securityUpdates"`
	WorkspaceID             string         `json:"workspaceId"`
}
