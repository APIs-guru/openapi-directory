package shared

type Environment struct {
	Arn                      string                        `json:"arn"`
	ConnectionType           *ConnectionTypeEnum           `json:"connectionType"`
	Description              *string                       `json:"description"`
	ID                       *string                       `json:"id"`
	Lifecycle                *EnvironmentLifecycle         `json:"lifecycle"`
	ManagedCredentialsStatus *ManagedCredentialsStatusEnum `json:"managedCredentialsStatus"`
	Name                     *string                       `json:"name"`
	OwnerArn                 string                        `json:"ownerArn"`
	Type                     EnvironmentTypeEnum           `json:"type"`
}
