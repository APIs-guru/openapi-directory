package shared

// ConfigurationErrorDetails
// Contains the details of an IoT SiteWise configuration error.
type ConfigurationErrorDetails struct {
	Code    ErrorCodeEnum `json:"code"`
	Message string        `json:"message"`
}
