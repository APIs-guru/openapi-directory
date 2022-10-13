package shared

type ListClientDevicesAssociatedWithCoreDeviceResponse struct {
	AssociatedClientDevices []AssociatedClientDevice `json:"associatedClientDevices"`
	NextToken               *string                  `json:"nextToken"`
}
