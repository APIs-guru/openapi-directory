package shared

type WorkspaceRead struct {
	AnonymousDataCollection *bool          `json:"anonymousDataCollection"`
	CustomerID              string         `json:"customerId"`
	DisplaySetupWizard      *bool          `json:"displaySetupWizard"`
	Email                   *string        `json:"email"`
	InitialSetupComplete    bool           `json:"initialSetupComplete"`
	Name                    string         `json:"name"`
	News                    *bool          `json:"news"`
	Notifications           []Notification `json:"notifications"`
	SecurityUpdates         *bool          `json:"securityUpdates"`
	Slug                    string         `json:"slug"`
	WorkspaceID             string         `json:"workspaceId"`
}
