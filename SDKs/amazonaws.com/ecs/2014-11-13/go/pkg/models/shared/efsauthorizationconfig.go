package shared

// EfsAuthorizationConfig
// The authorization configuration details for the Amazon EFS file system.
type EfsAuthorizationConfig struct {
	AccessPointID *string                        `json:"accessPointId,omitempty"`
	Iam           *EfsAuthorizationConfigIamEnum `json:"iam,omitempty"`
}
