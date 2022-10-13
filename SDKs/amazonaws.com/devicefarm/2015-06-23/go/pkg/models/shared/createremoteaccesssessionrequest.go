package shared

type CreateRemoteAccessSessionRequest struct {
	ClientID            *string                                 `json:"clientId"`
	Configuration       *CreateRemoteAccessSessionConfiguration `json:"configuration"`
	DeviceArn           string                                  `json:"deviceArn"`
	InstanceArn         *string                                 `json:"instanceArn"`
	InteractionMode     *InteractionModeEnum                    `json:"interactionMode"`
	Name                *string                                 `json:"name"`
	ProjectArn          string                                  `json:"projectArn"`
	RemoteDebugEnabled  *bool                                   `json:"remoteDebugEnabled"`
	RemoteRecordAppArn  *string                                 `json:"remoteRecordAppArn"`
	RemoteRecordEnabled *bool                                   `json:"remoteRecordEnabled"`
	SkipAppResign       *bool                                   `json:"skipAppResign"`
	SSHPublicKey        *string                                 `json:"sshPublicKey"`
}
