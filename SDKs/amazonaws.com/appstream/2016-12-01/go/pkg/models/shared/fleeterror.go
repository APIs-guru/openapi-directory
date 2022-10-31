package shared

type FleetError struct {
	ErrorCode    *FleetErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage *string             `json:"ErrorMessage,omitempty"`
}
