package shared

type FleetError struct {
	ErrorCode    *FleetErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage *string             `json:"ErrorMessage"`
}
