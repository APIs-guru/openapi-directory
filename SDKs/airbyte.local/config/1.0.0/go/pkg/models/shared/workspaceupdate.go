package shared

type WorkspaceUpdate struct {
	AnonymousDataCollection bool           `json:"anonymousDataCollection"`
	DisplaySetupWizard      *bool          `json:"displaySetupWizard"`
	Email                   *string        `json:"email"`
	InitialSetupComplete    bool           `json:"initialSetupComplete"`
	News                    bool           `json:"news"`
	Notifications           []Notification `json:"notifications"`
	SecurityUpdates         bool           `json:"securityUpdates"`
	WorkspaceID             string         `json:"workspaceId"`
}
