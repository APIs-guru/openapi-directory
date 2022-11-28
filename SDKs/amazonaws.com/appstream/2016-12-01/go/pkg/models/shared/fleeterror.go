package shared

// FleetError
// Describes a fleet error.
type FleetError struct {
	ErrorCode    *FleetErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string             `json:"ErrorMessage,omitempty"`
}
