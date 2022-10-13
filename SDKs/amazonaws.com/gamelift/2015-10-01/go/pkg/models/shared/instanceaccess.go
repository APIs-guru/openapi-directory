package shared

type InstanceAccess struct {
	Credentials     *InstanceCredentials `json:"Credentials"`
	FleetID         *string              `json:"FleetId"`
	InstanceID      *string              `json:"InstanceId"`
	IPAddress       *string              `json:"IpAddress"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
}
