package shared

// PciID
// Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.
type PciID struct {
	DeviceID          *string
	SubsystemID       *string
	SubsystemVendorID *string
	VendorID          *string
}
