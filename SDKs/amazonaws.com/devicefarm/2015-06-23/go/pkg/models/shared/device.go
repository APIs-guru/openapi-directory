package shared

type Device struct {
	Arn                 *string                 `json:"arn"`
	Availability        *DeviceAvailabilityEnum `json:"availability"`
	Carrier             *string                 `json:"carrier"`
	CPU                 *CPU                    `json:"cpu"`
	FleetName           *string                 `json:"fleetName"`
	FleetType           *string                 `json:"fleetType"`
	FormFactor          *DeviceFormFactorEnum   `json:"formFactor"`
	HeapSize            *int64                  `json:"heapSize"`
	Image               *string                 `json:"image"`
	Instances           []DeviceInstance        `json:"instances"`
	Manufacturer        *string                 `json:"manufacturer"`
	Memory              *int64                  `json:"memory"`
	Model               *string                 `json:"model"`
	ModelID             *string                 `json:"modelId"`
	Name                *string                 `json:"name"`
	Os                  *string                 `json:"os"`
	Platform            *DevicePlatformEnum     `json:"platform"`
	Radio               *string                 `json:"radio"`
	RemoteAccessEnabled *bool                   `json:"remoteAccessEnabled"`
	RemoteDebugEnabled  *bool                   `json:"remoteDebugEnabled"`
	Resolution          *Resolution             `json:"resolution"`
}
