package shared

// FpgaInfo
// Describes the FPGAs for the instance type.
type FpgaInfo struct {
	Fpgas                []FpgaDeviceInfo
	TotalFpgaMemoryInMiB *int64
}
