package shared

// InferenceDeviceInfo
// Describes the Inference accelerators for the instance type.
type InferenceDeviceInfo struct {
	Count        *int64
	Manufacturer *string
	Name         *string
}
