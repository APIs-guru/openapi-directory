package shared

// ResponseError
// Describes the error that's returned when you cannot delete a launch template version.
type ResponseError struct {
	Code    *LaunchTemplateErrorCodeEnum
	Message *string
}
