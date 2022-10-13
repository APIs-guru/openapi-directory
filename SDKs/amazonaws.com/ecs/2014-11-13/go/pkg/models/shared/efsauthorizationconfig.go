package shared

type EfsAuthorizationConfig struct {
	AccessPointID *string                        `json:"accessPointId"`
	Iam           *EfsAuthorizationConfigIamEnum `json:"iam"`
}
