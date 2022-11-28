package shared

// AssociateClientDeviceWithCoreDeviceErrorEntry
// Contains an error that occurs from a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
type AssociateClientDeviceWithCoreDeviceErrorEntry struct {
	Code      *string `json:"code,omitempty"`
	Message   *string `json:"message,omitempty"`
	ThingName *string `json:"thingName,omitempty"`
}
