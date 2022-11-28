package shared

// FpgaDeviceInfo
// Describes the FPGA accelerator for the instance type.
type FpgaDeviceInfo struct {
	Count        *int64
	Manufacturer *string
	MemoryInfo   *FpgaDeviceMemoryInfo
	Name         *string
}
