package shared

// InstanceAccess
// Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>.
type InstanceAccess struct {
	Credentials     *InstanceCredentials `json:"Credentials,omitempty"`
	FleetID         *string              `json:"FleetId,omitempty"`
	InstanceID      *string              `json:"InstanceId,omitempty"`
	IPAddress       *string              `json:"IpAddress,omitempty"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
}
