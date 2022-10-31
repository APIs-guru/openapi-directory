package shared



type InstanceAccess struct {
    Credentials *InstanceCredentials `json:"Credentials,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    IPAddress *string `json:"IpAddress,omitempty"`
    OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
    
}

