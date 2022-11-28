package shared

// ProcessorInfo
// Describes the processor used by the instance type.
type ProcessorInfo struct {
	SupportedArchitectures   []ArchitectureTypeEnum
	SustainedClockSpeedInGhz *float64
}
