package shared

type WorkspaceRead struct {
	AnonymousDataCollection *bool          `json:"anonymousDataCollection,omitempty"`
	CustomerID              string         `json:"customerId"`
	DisplaySetupWizard      *bool          `json:"displaySetupWizard,omitempty"`
	Email                   *string        `json:"email,omitempty"`
	InitialSetupComplete    bool           `json:"initialSetupComplete"`
	Name                    string         `json:"name"`
	News                    *bool          `json:"news,omitempty"`
	Notifications           []Notification `json:"notifications,omitempty"`
	SecurityUpdates         *bool          `json:"securityUpdates,omitempty"`
	Slug                    string         `json:"slug"`
	WorkspaceID             string         `json:"workspaceId"`
}
