package shared

// DeleteFleetError
// Describes an EC2 Fleet error.
type DeleteFleetError struct {
	Code    *DeleteFleetErrorCodeEnum
	Message *string
}
