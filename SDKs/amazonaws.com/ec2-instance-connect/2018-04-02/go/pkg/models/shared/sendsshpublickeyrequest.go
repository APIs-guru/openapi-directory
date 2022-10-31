package shared



type SendSSHPublicKeyRequest struct {
    AvailabilityZone string `json:"AvailabilityZone"`
    InstanceID string `json:"InstanceId"`
    InstanceOsUser string `json:"InstanceOSUser"`
    SSHPublicKey string `json:"SSHPublicKey"`
    
}

