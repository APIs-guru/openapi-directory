package shared

// AssociateClientDeviceWithCoreDeviceEntry
// Contains a request to associate a client device with a core device. The <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html">BatchAssociateClientDeviceWithCoreDevice</a> operation consumes a list of these requests.
type AssociateClientDeviceWithCoreDeviceEntry struct {
	ThingName string `json:"thingName"`
}
