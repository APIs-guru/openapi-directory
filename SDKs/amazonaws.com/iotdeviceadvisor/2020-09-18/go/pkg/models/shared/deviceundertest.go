package shared

// DeviceUnderTest
// Lists all the devices under test
type DeviceUnderTest struct {
	CertificateArn *string `json:"certificateArn,omitempty"`
	ThingArn       *string `json:"thingArn,omitempty"`
}
