package shared

type Environment struct {
	Arn                      string                        `json:"arn"`
	ConnectionType           *ConnectionTypeEnum           `json:"connectionType,omitempty"`
	Description              *string                       `json:"description,omitempty"`
	ID                       *string                       `json:"id,omitempty"`
	Lifecycle                *EnvironmentLifecycle         `json:"lifecycle,omitempty"`
	ManagedCredentialsStatus *ManagedCredentialsStatusEnum `json:"managedCredentialsStatus,omitempty"`
	Name                     *string                       `json:"name,omitempty"`
	OwnerArn                 string                        `json:"ownerArn"`
	Type                     EnvironmentTypeEnum           `json:"type"`
}
