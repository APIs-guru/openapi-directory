package shared

type MonitorErrorDetails struct {
	Code    *MonitorErrorCodeEnum `json:"code"`
	Message *string               `json:"message"`
}
