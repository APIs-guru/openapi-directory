package shared



type ConfirmDeviceRequest struct {
    AccessToken string `json:"AccessToken"`
    DeviceKey string `json:"DeviceKey"`
    DeviceName *string `json:"DeviceName,omitempty"`
    DeviceSecretVerifierConfig *DeviceSecretVerifierConfigType `json:"DeviceSecretVerifierConfig,omitempty"`
    
}

