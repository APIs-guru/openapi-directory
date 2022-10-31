package shared



type WorkspaceCreate struct {
    AnonymousDataCollection *bool `json:"anonymousDataCollection,omitempty"`
    Email *string `json:"email,omitempty"`
    Name string `json:"name"`
    News *bool `json:"news,omitempty"`
    Notifications []Notification `json:"notifications,omitempty"`
    SecurityUpdates *bool `json:"securityUpdates,omitempty"`
    
}

