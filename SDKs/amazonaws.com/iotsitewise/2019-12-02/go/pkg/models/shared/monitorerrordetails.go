package shared

// MonitorErrorDetails
// Contains IoT SiteWise Monitor error details.
type MonitorErrorDetails struct {
	Code    *MonitorErrorCodeEnum `json:"code,omitempty"`
	Message *string               `json:"message,omitempty"`
}
