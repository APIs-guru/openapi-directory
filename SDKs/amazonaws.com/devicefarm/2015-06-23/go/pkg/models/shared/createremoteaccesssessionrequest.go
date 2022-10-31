package shared

type CreateRemoteAccessSessionRequest struct {
	ClientID            *string                                 `json:"clientId,omitempty"`
	Configuration       *CreateRemoteAccessSessionConfiguration `json:"configuration,omitempty"`
	DeviceArn           string                                  `json:"deviceArn"`
	InstanceArn         *string                                 `json:"instanceArn,omitempty"`
	InteractionMode     *InteractionModeEnum                    `json:"interactionMode,omitempty"`
	Name                *string                                 `json:"name,omitempty"`
	ProjectArn          string                                  `json:"projectArn"`
	RemoteDebugEnabled  *bool                                   `json:"remoteDebugEnabled,omitempty"`
	RemoteRecordAppArn  *string                                 `json:"remoteRecordAppArn,omitempty"`
	RemoteRecordEnabled *bool                                   `json:"remoteRecordEnabled,omitempty"`
	SkipAppResign       *bool                                   `json:"skipAppResign,omitempty"`
	SSHPublicKey        *string                                 `json:"sshPublicKey,omitempty"`
}
