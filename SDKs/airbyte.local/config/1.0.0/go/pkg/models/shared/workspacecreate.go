package shared

type WorkspaceCreate struct {
	AnonymousDataCollection *bool          `json:"anonymousDataCollection"`
	Email                   *string        `json:"email"`
	Name                    string         `json:"name"`
	News                    *bool          `json:"news"`
	Notifications           []Notification `json:"notifications"`
	SecurityUpdates         *bool          `json:"securityUpdates"`
}
