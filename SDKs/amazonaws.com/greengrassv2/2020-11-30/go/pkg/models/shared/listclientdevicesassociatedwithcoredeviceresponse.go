package shared



type ListClientDevicesAssociatedWithCoreDeviceResponse struct {
    AssociatedClientDevices []AssociatedClientDevice `json:"associatedClientDevices,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

